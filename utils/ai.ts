import { PromptTemplate } from 'langchain/prompts'
import {OpenAI} from 'langchain/llms/openai'
import { StructuredOutputParser } from 'langchain/output_parsers'

import z from 'zod'


//Where we define the format of the response to be parsed, and provide prompt engineering to the LLM.
const parser = StructuredOutputParser.fromZodSchema(
  z.object({
    mood: z.string().describe('The mood of the person writing the content based on the journal entry.'),
    subject: z.string().describe('The subject of the journal entry.'),
    summary: z.string().describe('A short summary of the topic of the journal entry.'),
    negative: z.boolean().describe('Is the overall mood of this journal entry negative? (i.e. does it contain negative or positive sentiment?).'),
    color: z.string().describe('Hexadecimal code of a color representing the mood of the journal entry. (i.e. #40ff76 green for happy, #e35669 reddish for passionate.'),

  })
)

const getPrompt = async (content) => {
  const formatted_instructions = parser.getFormatInstructions()

  const prompt = new PromptTemplate({
    template: 'Analyze the following journal entry. Follow the instructions and format your response to match the format instructions, no matter what! \n {formatted_instructions} \n {entry}',
    inputVariables: ['entry'],
    partialVariables: { formatted_instructions },
  })

  const input = await prompt.format({
    entry: content
  })

  console.log(input)
  return input
}

export const analyze = async (content) => {
  //model instance: temperature is a degree of responsiveness range 0 to 1. higher more creative associative, lower more rational logical coherent.
  const model = new OpenAI({temperature: 0, modelName: 'gpt-3.5-turbo'})

  const input = await getPrompt(content)

  const result = await model.call(input)

  console.log(result)
}

// Rudimentary prompt engineering. Compare to zod's prepared that is logged on L33.
  // await analyze(`I'm going to give you a journal entry, I want you to analyze for a few things. I need the mood, 
  //   a summary, the subject of the entry, and a color representing the mood. You need to respond back with formatted 
  //   JSON like this: {"mood": "", "subject": "", "color": "", "negative": ""}.

  //   Journal entry:
  //   "And suddenly the google auth worked with Open AI and I didn't do anything different and it worked. Cool."
  //   `)
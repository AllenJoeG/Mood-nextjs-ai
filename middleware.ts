//must be on root, but be named 'middleware.ts' to meet Convention
import { authMiddleware } from "@clerk/nextjs";

//returns a function
export default authMiddleware({
  // Routes to leave unprotected
  publicRoutes: ['/'],
})

//Regex that only allows specific pieces to run
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
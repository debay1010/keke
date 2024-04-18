import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
	publicRoutes: [
		"/",
		"/adverts/:id",
		"/api/webhook/clerk",
		"/api/webhook/stripe",
		"/api/uploadthing",
	],
	ignoredRoutes: [
		"/api/webhook/clerk",
		"/api/webhook/stripe",
		"/api/uploadthing",
		"/assets/images/logo.svg",
		"/favicon.ico",
	],
});

export const config = {
	matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

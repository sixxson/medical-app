import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();
// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
    // Define as many FileRoutes as you like, each with a unique routeSlug
    doctorProfileImage: f({ image: { maxFileSize: "2MB" } }).onUploadComplete(
        async ({ metadata, file }) => {
            console.log("file url", file.url);
            return { uploadedBy: "JB" };
        }
    ),
    doctorProfessionDocs: f({ pdf: { maxFileSize: "4MB", maxFileCount:4} }).onUploadComplete(
        async ({ metadata, file }) => {
            console.log("file url", file.url);
            return { uploadedBy: "JB" };
        }
    ),
    additionalDocs: f({ pdf: { maxFileSize: "4MB", maxFileCount:4} }).onUploadComplete(
        async ({ metadata, file }) => {
            console.log("file url", file.url);
            return { uploadedBy: "JB" };
        }
    ),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;

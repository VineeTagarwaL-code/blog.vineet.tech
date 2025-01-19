// "use server";
// import prisma from "@/lib/prisma";

// export async function fetchViewCount(blog: string) {
//   const viewCount = await prisma.count.findUnique({
//     where: { blog },
//   });

//   if (!viewCount) {
//     return 0;
//   }

//   return viewCount.viewCount;
// }

// export async function incrementViewCount(blog: string) {
//   const viewCount = await prisma.count.findUnique({
//     where: { blog },
//   });

//   if (!viewCount) {
//     await prisma.count.create({
//       data: {
//         blog,
//         viewCount: 1,
//       },
//     });
//   } else {
//     await prisma.count.update({
//       where: { blog },
//       data: {
//         viewCount: viewCount.viewCount + 1,
//       },
//     });
//   }
// }

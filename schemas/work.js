export default {
  title: "Work Page",
  name: "workPage",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Description",
      name: "description",
      type: "string",
    },
    {
      title: "Image",
      name: "image",
      type: "image",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      title: "Live Site",
      name: "liveSite",
      type: "string",
    },
    {
      title: "Github",
      name: "github",
      type: "string",
    },
  ],
};

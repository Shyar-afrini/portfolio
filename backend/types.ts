export type TContent = {
  title: string;
  description: {
    text: string;
  };
  coverImage: {
    url: string;
  };
  gallery: [
    {
      url: string;
    },
    {
      url: string;
    }
  ];
  link: string;
};

export type BlogPart = {
  postType: "header" | "text" | "list" | "quote" | "image"; //OK
  postId: string; // db'de gerek var mı?
  postContent: string; //ok
  options?: {
    //ok
    size?: "sm" | "md" | "lg"; //ok
    color?: string; //ok
    textAlignment?: "left" | "center" | "right"; //ok
    listType?: "ul" | "ol"; //ok
  };
};

export type BlogPost = {
  blogPostId: string; //ok
  blogPostArray: BlogPart[]; //ok
  creationDate: string; //ok
  author: string;
  tags: string[]; //ok
};

export type BlogPart = {
  postType: "header" | "text" | "list" | "quote" | "image" | "divider";
  postContent: string | string[];
  options?: {
    size?: "sm" | "md" | "lg";
    color?: string;
    textAlignment?: "left" | "center" | "right";
    listType?: "ul" | "ol";
  };
};

export type BlogPost = {
  blogPostId: string;
  blogPostArray: BlogPart[];
  creationDate: string;
  author: string;
  tags: string[];
};

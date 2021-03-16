interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function singIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token:
          "eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ",
        user: {
          name: "Lucas Sousa",
          email: "LucasSousa@exemplo.com",
        },
      });
    }, 2000);
  });
}

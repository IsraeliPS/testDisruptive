//configuration Type
export type Data = {
  jwt: {
    secret: string | undefined;
  };
  app: {
    port: string | undefined;
  };
  api: {
    key: string | undefined;
  };
  enviroment: {
    local: string | undefined;
    prod: string | undefined;
  };
};

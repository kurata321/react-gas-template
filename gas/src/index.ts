import {doGet, hello} from "./app/main";

declare const global: {
  [x: string]: unknown;
};

global.doGet = doGet;
global.hello = hello;

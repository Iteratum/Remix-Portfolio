///import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import PortfolioNavRoute from "./routes/_nav";
import PortfolioFooterRoute from "./routes/_footer";


export const meta: V2_MetaFunction = () => {
  return [
    { title: "Remix Portfolio Website" },
    { name: "description", content: "Welcome to My Remix Portfolio Website!" },
  ];
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];


export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="text-white bg-purple-950">
        <PortfolioNavRoute />
        <Outlet />
        <PortfolioFooterRoute />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

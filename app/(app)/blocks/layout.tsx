import { Metadata } from "next"

import { Announcement } from "@/components/announcement"
import { BlocksNav } from "@/components/blocks-nav"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { Button } from "@/registry/new-york/ui/button"

import "@/styles/mdx.css"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Building Blocks.",
  description:
    "Beautifully designed. Copy and paste into your apps. Open Source.",
}

export default function BlocksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <PageHeader>
        <Announcement />
        <PageHeaderHeading>Craft Your Rich Text Editor</PageHeaderHeading>
        <PageHeaderDescription>
          Accessible, Customizable, Open Source Text Editor
          <br />
          Made with Lexical and Shadcn/UI
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm">
            <Link href="/docs">Get Started</Link>
          </Button>
          <Button asChild size="sm" variant="ghost">
            <Link href={"/docs/plugins"}>Browse Plugins</Link>
          </Button>
        </PageActions>
      </PageHeader>
      <div id="blocks" className="border-grid scroll-mt-24 border-b hidden">
        <div className="container-wrapper">
          <div className="container flex items-center py-4">
            <BlocksNav />
          </div>
        </div>
      </div>
      <div className="container-wrapper flex-1">{children}</div>
    </>
  )
}

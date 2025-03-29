'use client'

import { useState } from 'react'

import Link from 'next/link'

import { SerializedEditorState } from 'lexical'

import { Editor } from '@/components/blocks/editor/editor'
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header'
import { Button } from '@/registry/new-york/ui/button'

import { Announcement } from '@/components/announcement'

export const initialValue = {
  root: {
    children: [
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: 'normal',
            style: '',
            text: 'Hello World 🚀',
            type: 'text',
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        type: 'paragraph',
        version: 1,
      },
    ],
    direction: 'ltr',
    format: '',
    indent: 0,
    type: 'root',
    version: 1,
  },
} as unknown as SerializedEditorState

export default function Home() {
  const [editorState, setEditorState] =
    useState<SerializedEditorState>(initialValue)

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
      <div className="container-wrapper">
        <div className="container py-6">
          <Editor
            editorSerializedState={editorState}
            onSerializedChange={(value) => setEditorState(value)}
          />
        </div>
      </div>
    </>
  )
}
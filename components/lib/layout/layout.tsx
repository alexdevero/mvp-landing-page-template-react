import Head from 'next/head'
import { ReactNode, memo } from 'react'

export interface LayoutProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

export const Layout = memo((props: LayoutProps) => (
  <div>
    <Head>
      <title>{props.title}</title>

      {props.description && (
        <meta name="description" content={props.description} />
      )}
    </Head>

    {props.children}
  </div>
))

Layout.displayName = 'Layout'

import React from 'react'
import { parseMarkdown } from '../utils'
import gql from 'graphql-tag'
import { ArticleDetailFragment } from '../graphql/generated/types'
import { createStyles, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() =>
  createStyles({
    paper: {
      padding: '16px',
    },
    chip: {
      margin: '8px 8px 0 0',
    },
  })
)

export const articleDetailFragment = gql`
  fragment ArticleDetail on Article {
    id
    title
    date
    content
  }
`

type Props = {
  article: ArticleDetailFragment
}

export default function ArticleDetail({ article }: Props): JSX.Element {
  const styles = useStyles()

  return (
    <Paper className={styles.paper}>
      <Typography variant={'h4'} color={'textSecondary'}>
        {article.title}
      </Typography>
      <Typography variant={'body1'} color={'textSecondary'}>
        {article.date}
      </Typography>
      {article.content && (
        <Typography color={'textSecondary'}>
          <div
            dangerouslySetInnerHTML={{
              __html: parseMarkdown(article.content),
            }}
          />
        </Typography>
      )}
    </Paper>
  )
}

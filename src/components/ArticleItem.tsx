import React from 'react'
import { Chip, createStyles, Grid, Paper, Typography } from '@material-ui/core'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import gql from 'graphql-tag'
import { ArticleItemFragment } from '../graphql/generated/types'

const useStyles = makeStyles(() =>
  createStyles({
    item: {
      padding: '16px',
    },
    chip: {
      margin: '8px 8px 0 0',
    },
  })
)

export const articleItemFragment = gql`
  fragment ArticleItem on Article {
    id
    slug
    title
    date
    tags
    comment
  }
`

type Props = {
  article: ArticleItemFragment
}

export default function ArticleItem({ article }: Props): JSX.Element {
  const styles = useStyles()
  return (
    <Grid item xs={12}>
      <Link href={'/[slug]'} as={`/${article.slug}`}>
        <a>
          <Paper className={styles.item}>
            <Typography variant={'h6'} color={'textSecondary'}>
              {article.title}
            </Typography>
            <Typography variant={'body1'} color={'textSecondary'}>
              {article.comment}
            </Typography>
            {typeof article.date === 'string' && (
              <Typography variant={'body1'} color={'textSecondary'}>
                {article.date}
              </Typography>
            )}
            {article.tags.map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                color={'primary'}
                className={styles.chip}
              />
            ))}
          </Paper>
        </a>
      </Link>
    </Grid>
  )
}

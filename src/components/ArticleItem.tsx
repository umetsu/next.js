import React from 'react'
import { Chip, createStyles, Grid, Paper, Typography } from '@material-ui/core'
import Link from 'next/link'
import { graphql, useFragment } from 'react-relay/hooks'
import { ArticleItemFragment$key } from '../graphql/__generated__/ArticleItemFragment.graphql'
import { makeStyles } from '@material-ui/core/styles'

const fragmentSpec = graphql`
  fragment ArticleItemFragment on Article {
    id
    slug
    title
    date
    tags
    excerpt
  }
`

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

type Props = {
  fragmentRef: ArticleItemFragment$key
}

export default function ArticleItem({ fragmentRef }: Props): JSX.Element {
  const article = useFragment(fragmentSpec, fragmentRef)
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
              {article.excerpt}
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

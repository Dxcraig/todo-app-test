# Deployment Guide

This document explains how to set up preview deployments for the Todo App.

## Quick Setup

For a guided setup process, run:

```
npm run setup-deployment
```

This script will help you configure either Netlify or Vercel for preview deployments.

## Netlify Setup

1. Create a Netlify account at [netlify.com](https://www.netlify.com/)
2. Connect your GitHub repository to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Get your Netlify Site ID and Auth Token
5. Add the following secrets to your GitHub repository:
   - `NETLIFY_AUTH_TOKEN`: Your Netlify personal access token
   - `NETLIFY_SITE_ID`: Your Netlify site ID

## Vercel Setup

1. Create a Vercel account at [vercel.com](https://vercel.com/)
2. Install Vercel CLI: `npm i -g vercel`
3. Link your project: `vercel link`
4. Get your Vercel token from your account settings
5. Add the following secret to your GitHub repository:
   - `VERCEL_TOKEN`: Your Vercel personal access token

## Using Preview Deployments

- Every pull request will automatically generate a preview deployment
- The deployment URL will be posted as a comment on the pull request
- Use this URL to preview changes before merging

## Choosing Between Netlify and Vercel

Both services offer similar functionality. By default, the project is configured to use Netlify for preview deployments. To use Vercel instead:

1. Disable the `preview.yml` workflow by renaming it to `preview.yml.disabled`
2. Rename `preview-vercel.yml` to `preview.yml`

Alternatively, you can keep both workflows and choose which one to run manually from the GitHub Actions tab.
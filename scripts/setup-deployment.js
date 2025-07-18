#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { execSync } = require('child_process');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Todo App Deployment Setup');
console.log('=========================');
console.log('This script will help you set up preview deployments for your Todo App.');

rl.question('Which deployment service would you like to use? (netlify/vercel): ', (service) => {
  if (service.toLowerCase() === 'netlify') {
    setupNetlify();
  } else if (service.toLowerCase() === 'vercel') {
    setupVercel();
  } else {
    console.log('Invalid option. Please choose "netlify" or "vercel".');
    rl.close();
  }
});

function setupNetlify() {
  console.log('\nSetting up Netlify deployment...');
  console.log('1. Make sure you have a Netlify account');
  console.log('2. Install Netlify CLI if not already installed: npm install -g netlify-cli');
  
  try {
    execSync('netlify --version', { stdio: 'ignore' });
    console.log('✅ Netlify CLI is installed');
  } catch (error) {
    console.log('❌ Netlify CLI is not installed. Please install it with: npm install -g netlify-cli');
    rl.close();
    return;
  }
  
  console.log('\nRunning Netlify login...');
  try {
    execSync('netlify login', { stdio: 'inherit' });
    console.log('✅ Logged in to Netlify');
    
    console.log('\nInitializing Netlify site...');
    execSync('netlify init', { stdio: 'inherit' });
    
    console.log('\n✅ Netlify setup complete!');
    console.log('\nNext steps:');
    console.log('1. Get your Netlify site ID from the .netlify/state.json file');
    console.log('2. Get your Netlify personal access token from the Netlify website');
    console.log('3. Add these as secrets in your GitHub repository:');
    console.log('   - NETLIFY_AUTH_TOKEN: Your personal access token');
    console.log('   - NETLIFY_SITE_ID: Your site ID');
  } catch (error) {
    console.log('❌ Error setting up Netlify:', error.message);
  }
  
  rl.close();
}

function setupVercel() {
  console.log('\nSetting up Vercel deployment...');
  console.log('1. Make sure you have a Vercel account');
  console.log('2. Install Vercel CLI if not already installed: npm install -g vercel');
  
  try {
    execSync('vercel --version', { stdio: 'ignore' });
    console.log('✅ Vercel CLI is installed');
  } catch (error) {
    console.log('❌ Vercel CLI is not installed. Please install it with: npm install -g vercel');
    rl.close();
    return;
  }
  
  console.log('\nRunning Vercel login...');
  try {
    execSync('vercel login', { stdio: 'inherit' });
    console.log('✅ Logged in to Vercel');
    
    console.log('\nLinking project to Vercel...');
    execSync('vercel link', { stdio: 'inherit' });
    
    console.log('\n✅ Vercel setup complete!');
    console.log('\nNext steps:');
    console.log('1. Get your Vercel token from your account settings');
    console.log('2. Add it as a secret in your GitHub repository:');
    console.log('   - VERCEL_TOKEN: Your Vercel token');
    
    // Enable Vercel workflow
    console.log('\nWould you like to use Vercel as the default preview deployment service? (y/n)');
    rl.question('', (answer) => {
      if (answer.toLowerCase() === 'y') {
        try {
          const workflowsDir = path.join(__dirname, '..', '.github', 'workflows');
          fs.renameSync(
            path.join(workflowsDir, 'preview.yml'),
            path.join(workflowsDir, 'preview-netlify.yml')
          );
          fs.renameSync(
            path.join(workflowsDir, 'preview-vercel.yml'),
            path.join(workflowsDir, 'preview.yml')
          );
          console.log('✅ Vercel is now the default preview deployment service');
        } catch (error) {
          console.log('❌ Error updating workflows:', error.message);
        }
      }
      rl.close();
    });
  } catch (error) {
    console.log('❌ Error setting up Vercel:', error.message);
    rl.close();
  }
}
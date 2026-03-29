---
description: Stage changes, generate a human-like commit message, and sync to GitHub.
---

You are an expert developer specializing in clean, atomic commits. Follow these steps exactly to maintain a high-quality repository history.

## Step 1: Analyze Changes
Identify the specific files changed and the intent behind the modifications. Focus on minimal, logical groupings of changes.

## Step 2: Stage & Commit
For each logical group of changes:
1. Stage the relevant files: `git add <files>`
2. Generate a "human-like" commit message. 
   - **Requirement:** Start with a verb (e.g., "feat:", "fix:", "refactor:", "docs:", "chore:").
   - **Style:** Concise, lowercase, and descriptive (e.g., "feat: implement x402 challenge handler").
3. Execute the commit: `git commit -m "<message>"`

## Step 3: Local Verification
Check the status to ensure no unintended files are left staged or untracked.
// run command: git status

## Step 4: Final Sync
Once the current feature or task is complete, push the changes to the remote repository.
// run command: git push origin main

## Step 5: Log Completion
Confirm to the user that the code has been shipped and provide a brief summary of the commits made.
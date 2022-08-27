#!/bin/sh

# full paths from the repo root separated by newlines
MUST_NOT_CHANGE='createFileFromGit.js
removeFile.js'

if git rev-parse --verify HEAD >/dev/null 2>&1
then
  against=HEAD
else
  # Initial commit: diff against an empty tree object
  against=4b825dc642cb6eb9a060e54bf8d69288fbee4904
fi

exec 1>&2

if git diff --cached --name-only $against |
   grep --quiet --line-regexp --fixed-strings "$MUST_NOT_CHANGE"
then
  echo Commit would modify these files that must not change: $(git diff --cached --name-only $against |
   grep "$MUST_NOT_CHANGE")
  exit 1
else
  exit 0
fi

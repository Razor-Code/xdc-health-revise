import process from 'process'
import minimist from 'minimist'
import { Web3Storage, getFilesFromPath } from 'web3.storage'

export async function upload(files) {
  const args = minimist(process.argv.slice(2))
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDE5OURhYzFkODAxYTk2ZjU4ZTU0NmM0OTk5NzM0Zjg1MDgzY2NkNTciLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjM4NTY2MTc5NzIsIm5hbWUiOiJ4ZGMtaGVhbHRoIn0.LRbF9s7Lm194YtIA7hgakSFoPoEe2BNzDxuM26CBCwY"

  if (!token) {
    return console.error('A token is needed. You can create one on https://web3.storage')
  }

  if (args._.length < 1) {
    return console.error('Please supply the path to a file or directory')
  }

  const storage = new Web3Storage({ token })

  for (const path of files) {
    const pathFiles = await getFilesFromPath(path)
    files.push(...pathFiles)
  }

  console.log(`Uploading ${files.length} files`)
  const cid = await storage.put(files)
  
  return cid
}


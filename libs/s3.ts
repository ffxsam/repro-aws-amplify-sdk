import { S3Client, ListBucketsCommand } from "@aws-sdk/client-s3";

export async function listBuckets() {
  const s3 = new S3Client({});
  const { Buckets } = await s3.send(new ListBucketsCommand({}));

  return Buckets.map((bucket) => bucket.Name);
}

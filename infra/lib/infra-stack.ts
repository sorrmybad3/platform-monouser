import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create a new S3 bucket
    let bucket = new s3.Bucket(this, 'MyFirstBucket', {
      versioned: true, // Enable versioning for the bucket
      removalPolicy: cdk.RemovalPolicy.DESTROY, // Ensure the bucket is deleted with the stack
      autoDeleteObjects: true, // Automatically delete all versions and objects in the bucket
    });

    new cdk.CfnOutput(this, 'BucketName', {
      value: bucket.bucketName,
      description: 'The name of the S3 bucket',
    });
  }
}

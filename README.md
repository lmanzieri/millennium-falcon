# millennium-falcon
Zup challenge

## Pre Req

Validate CF Templates

` $ aws cloudformation validate-template --template-body file://MainStack.yml `

` $ aws cloudformation validate-template --template-body file://SubnetStack.yml `

` $ aws cloudformation validate-template --template-body file://NatGatewayStack.yml `

Create a bucket of CF Templates

` $ aws s3 mb s3://millennium-falcon-s3/ --region us-east-1 `

Sync the git repo to bucket of CF Templates

` $ aws s3 sync ./cf-infra-stack/ s3://millennium-falcon-s3/ --region us-east-1 `

Deploy CF Stack

` $ aws cloudformation deploy --region us-east-1 --stack-name millennium-falcon-stack --template-file ./cf-infra-stack/MainStack.yml --capabilities CAPABILITY_NAMED_IAM `

Delete CF Stack

` $ aws cloudformation delete-stack --region us-east-1 --stack-name millennium-falcon-stack `
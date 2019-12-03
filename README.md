# millennium-falcon
Zup challenge

- Criar um cluster de Kubernetes gerenciado, preferencialmente na AWS, podendo utilizar o ambiente de free tier para não gerar custos extras ao candidato.

- Realizar o build e deploy neste cluster de Kubernetes de uma aplicação qualquer através de uma plataforma de CI/CD.

- Externalizar essa aplicação para o mundo externo usando Ingress ou outro proxy que o candidato conheça, para ser acessada via HTTP.

- É necessário que o candidato automatize a criação do cluster de Kubernetes, bem como regras de firewall, e outras dependências da solução utilizando Terraform ou qualquer outra forma de automação que conheça.


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

` $ aws cloudformation deploy --region us-east-1 --stack-name millennium-falcon-stack --template-file ./cf-infra-stack/MainStack.yml --capabilities CAPABILITY_NAMED_IAM --parameter-overrides KeyName=$Key`

Delete CF Stack

` $ aws cloudformation delete-stack --region us-east-1 --stack-name millennium-falcon-stack `
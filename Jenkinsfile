pipeline{

	agent {label 'prod-slave'}

	environment {
		DOCKERHUB_CREDENTIALS=credentials('dockerhub')
	}

	stages {
	    
	    stage('gitclone') {

			steps {
				git 'https://github.com/rayan147/ecommerce.git'
			}
		}

		stage('Build') {
              environment { 
                    AWS_BUCKET_IMAGES_NAME=$AWS_BUCKET_IMAGES_NAME
                    AWS_BUCKET_REGION=$AWS_BUCKET_REGION
                    AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID
                    AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY
					NODE_ENV=$NODE_ENV
                    PORT=$PORT
                    MONGO_URL_PROD=$MONGO_URL_PROD
                    JWT_TOKEN_SECRET=$JWT_TOKEN_SECRET
                    PAYPAL_CLIENT_ID=$PAYPAL_CLIENT_ID
                    REDIS_SERVER_IP=$REDIS_SERVER_IP
                    REDIS_PORT=$REDIS_PORT
                }
			steps {
				sh 'echo $REDIS_PORT'
				sh 'docker build -t rayan147/eco-backend-restful-api:latest ./backend'
                sh 'docker build -t rayan147/frontend:latest ./frontend/'
                sh 'docker build -t rayan147/nginx:latest ./nginx'
                sh 'docker build -t rayan147/uploads3:latest ./uploadS3'
			}
		
		}

		stage('Login') {

			steps {
				sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
			}
		}

		stage('Push') {

			steps {
				sh 'docker push rayan147/eco-backend-restful-api:latest'
                sh 'docker push rayan147/frontend:latest'
                sh 'docker push rayan147/nginx:latest'
                sh 'docker push rayan147/uploads3:latest'
			}
		}
	
		stage('Deploy') {
			
			steps {
				sh 'cd /home/ubuntu/projects/ecommerce'
				sh 'git pull origin master'
				sh 'docker-compose stop'
				sh 'docker-compose up  --build'
			}
		}
	}

	post {
		always {
			sh 'docker logout'
		}
	}

}
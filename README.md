# devops-test-2
GitHub repo for devops-test-2 code.

#CI Pipeline#

![Alt Showing CI Pipeline](CIPipeline.png?raw=true "CI Pipeline View")

#Application Deployment#

1. App docker image is created with all NPM dependencies included inside. It is an executable image which  starts express server and exposes /healthcheck API endpoint on port 3000.
2. Docker Image is tested for linting by overriding the CMD instruction.
3. Docker Image is tested for coverage and unit tests by overriding the CMD instruction.
4. Deploy & Test creates a docker container from the image and exposes the API. When new image is created and deployed for test, API downtime happens and hence outages to service happens.

#Container Orchestration Systems#

Container orchestration provides the solution to deal with outages to live services.

To minimize outage, Kubernetes provides the following disruption handling features:

i.   Graceful termination

ii.  Lifecycle hooks

iii. PodDisruptionBudgets

Kubernetes and Docker are both fundamentally different technologies but they work very well together, and both facilitate the management and deployment of containers in a distributed architecture.

#Application Deployment Strategy#

1. Push application docker images in container registry like gcr etc after API is tested for expected behaviour as described in CI pipeline.

2. Create a kubernetes cluster in Google Cloud Platform and deploy the application in kubernetes pods. Deployment files are declarative files which mentions the pods replicas and specs.

3. Expose the deployed pods by creating by kubernetes service.

4. Once the new image is pushed in gcr, kubernetes deployment file is edited to reflect the new image tag so as do a rolling update to the service.

5. New deployment is automatically applied to reflect the latest changes to the service without disrupting the live service.
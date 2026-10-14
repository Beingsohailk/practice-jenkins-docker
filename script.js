"use strict";
/* ============ EDIT YOUR DETAILS HERE ============ */
const CONFIG = {
  email: "sohailbagali768@gmail.com",
  github: "https://github.com/Beingsohailk",
  linkedin: "https://www.linkedin.com/in/sohail-bagali",
  resume: "resume.pdf",          // put your resume file next to index.html
  formEndpoint: "",              // e.g. "https://formspree.io/f/xxxxxx" (leave empty to use email app)
  about: "I'm a DevOps engineer interested in automation, cloud infrastructure, CI/CD, containers, and reliable deployments. I enjoy turning manual, error-prone processes into repeatable pipelines and learning how cloud-native tools fit together.",
  subtitles: ["DevOps Engineer | Cloud | CI/CD | Automation"],
  skills: {
    "Operating Systems": ["Linux"], "Version Control": ["Git", "GitHub"], "Containers": ["Docker"],
    "CI/CD": ["Jenkins"], "Orchestration": ["Kubernetes"], "Infrastructure as Code": ["Terraform"],
    "Configuration Management": ["Ansible"], "Cloud": ["AWS"], "Scripting": ["Bash", "Python"], "Monitoring": ["Prometheus", "Grafana"]
  },
  certs: [ // SAMPLE entries: replace with verified credentials, add a real "url" for each
    { name: "Microsoft Azure Fundamentals (AZ-900)", issuer: "Microsoft", status: "Verify details and add credential URL", url: "" },
    { name: "AWS Certified Solutions Architect – Associate", issuer: "Amazon Web Services", status: "In progress (not yet earned)", url: "" }
  ],
  projects: [ // EXAMPLE projects: replace with your real work and repo URLs
    { title: "Automated CI/CD Pipeline", problem: "Manual builds and deployments are slow and error-prone.", solution: "Git push triggers Jenkins, which builds a Docker image, runs tests, and pushes to a registry.", tech: ["Jenkins", "Git", "Docker"], learn: "Pipeline as code, image tagging, automated testing gates.", repo: "https://github.com/Beingsohailk" },
    { title: "Containerized App on Kubernetes", problem: "Apps need to scale and self-heal without manual restarts.", solution: "Deployment, Service, and Ingress manifests with rolling updates and health probes.", tech: ["Kubernetes", "Docker", "kubectl"], learn: "Rollouts, probes, resource limits, troubleshooting pods.", repo: "https://github.com/Beingsohailk" },
    { title: "Cloud Infrastructure with Terraform", problem: "Hand-built cloud resources drift and can't be reproduced.", solution: "Modular Terraform for network and compute with remote state and plan review.", tech: ["Terraform", "AWS"], learn: "State management, modules, safe plan/apply workflow.", repo: "https://github.com/Beingsohailk" },
    { title: "AWS Monitoring & Automation", problem: "Issues are noticed late without alerts and automated checks.", solution: "CloudWatch metrics and alarms plus scripts for routine operational tasks.", tech: ["AWS", "CloudWatch", "Bash"], learn: "Metrics, alarms, least-privilege IAM.", repo: "https://github.com/Beingsohailk" },
    { title: "Configuration Management with Ansible", problem: "Servers configured by hand become inconsistent.", solution: "Inventory, roles, and idempotent playbooks to configure servers.", tech: ["Ansible", "Linux"], learn: "Idempotency, roles, variables, vault.", repo: "https://github.com/Beingsohailk" }
  ]
};

/* ============ COMMAND DATA ============
   Each entry: [name, syntax, explanation, when/why, level, example, warning]
   Levels: B=Beginner, I=Intermediate, A=Advanced. Add commands by adding rows. */
const L = { B: "Beginner", I: "Intermediate", A: "Advanced" };
const DATA = {
  Docker: [
    ["Run a container", "docker run -d --name web -p 8080:80 nginx", "Starts a container from an image in the background and maps host port 8080 to container port 80.", "Quickly try a service locally. Requires Docker installed.", "B", "Then open http://localhost:8080"],
    ["List containers", "docker ps -a", "Shows running and stopped containers.", "Check what exists and each status.", "B"],
    ["View logs", "docker logs -f --tail 100 web", "Streams the last 100 log lines of a container.", "Debug a crashing or misbehaving app.", "B"],
    ["Shell into container", "docker exec -it web sh", "Opens an interactive shell inside a running container.", "Inspect files or test inside the container.", "B"],
    ["Build image", "docker build -t myapp:1.0 .", "Builds an image from the Dockerfile in the current folder and tags it.", "Package your app.", "B"],
    ["List images", "docker images", "Lists local images with tags and sizes.", "Find images to clean up or push.", "B"],
    ["Create network", "docker network create appnet", "Creates a user-defined bridge network so containers can reach each other by name.", "Connect app and database containers.", "I", "docker run -d --network appnet --name db postgres"],
    ["Create volume", "docker volume create data", "Creates a named volume for persistent data.", "Keep database files after the container is removed.", "I", "docker run -v data:/var/lib/postgresql/data postgres"],
    ["Push image", "docker push myuser/myapp:1.0", "Uploads an image to a registry.", "Share images with CI or servers. Requires docker login.", "I"],
    ["Inspect", "docker inspect web", "Prints detailed JSON about a container or image.", "Check IPs, mounts, and env vars.", "I"],
    ["Sample Dockerfile", "FROM node:20-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci --omit=dev\nCOPY . .\nEXPOSE 3000\nCMD [\"node\",\"server.js\"]", "Copies dependency files first so layers cache well, then the code.", "Starting point for a Node.js image.", "I"],
    ["Compose up", "docker compose up -d --build", "Builds and starts all services defined in docker-compose.yml.", "Run multi-container apps locally.", "I"],
    ["Compose down", "docker compose down", "Stops and removes Compose containers and networks.", "Clean up a Compose stack.", "I", "", "Adding -v also deletes named volumes and their data."],
    ["Stop and remove", "docker rm -f web", "Force-removes a container, even if running.", "Reset a broken container.", "B", "", "Unsaved data inside the container is lost."],
    ["Prune unused data", "docker system prune -a", "Deletes stopped containers, unused networks, and unused images.", "Reclaim disk space.", "A", "", "Destructive: removes all unused images. Don't run on shared or production hosts without review."]
  ],
  Git: [
    ["Clone", "git clone https://github.com/user/repo.git", "Copies a remote repository to your machine.", "Start working on an existing project.", "B"],
    ["Status", "git status -sb", "Short summary of changed and staged files.", "Check state before committing.", "B"],
    ["Stage and commit", "git add -A && git commit -m \"Add health check\"", "Stages all changes and records a commit.", "Save a logical unit of work.", "B"],
    ["New branch", "git switch -c feature/login", "Creates and switches to a new branch.", "Isolate work from main.", "B"],
    ["Diff", "git diff --staged", "Shows what will go into the next commit.", "Review before committing.", "B"],
    ["Log graph", "git log --oneline --graph --decorate -20", "Compact visual history.", "Understand branches and merges.", "B"],
    ["Push", "git push -u origin feature/login", "Uploads the branch and sets upstream tracking.", "Share work or open a pull request.", "B"],
    ["Pull with rebase", "git pull --rebase", "Fetches and replays your commits on top of remote changes.", "Keep a linear history.", "I"],
    ["Merge", "git merge --no-ff feature/login", "Merges a branch with an explicit merge commit.", "Integrate finished work.", "I"],
    ["Stash", "git stash push -m \"wip\" && git stash pop", "Temporarily shelves changes, then restores them.", "Switch branches with unfinished work.", "I"],
    ["Tag a release", "git tag -a v1.0.0 -m \"Release 1.0.0\" && git push origin v1.0.0", "Creates an annotated tag and publishes it.", "Mark deployable versions.", "I"],
    ["Interactive rebase", "git rebase -i HEAD~3", "Edit, squash, or reorder your last 3 commits.", "Clean up history before a PR.", "A", "", "Rewrites history. Never rebase commits others already pulled."],
    ["Undo last commit (keep changes)", "git reset --soft HEAD~1", "Moves HEAD back one commit but keeps changes staged.", "Fix a commit message or content.", "I"],
    ["Revert a commit", "git revert <commit-sha>", "Creates a new commit that undoes an earlier one.", "Safely undo something already pushed.", "I"],
    ["Hard reset", "git reset --hard origin/main", "Makes your branch and working tree match origin/main exactly.", "Discard local mess.", "A", "", "Destructive: uncommitted work is lost. Try git reflog to recover commits."]
  ],
  Jenkins: [
    ["Check service (Linux)", "sudo systemctl status jenkins", "Shows whether Jenkins is running. Requires a package install of Jenkins.", "First check when the UI is down.", "B"],
    ["Restart service", "sudo systemctl restart jenkins", "Restarts the Jenkins service.", "Apply config or recover a hung server.", "B", "", "Interrupts running builds."],
    ["View logs", "sudo journalctl -u jenkins -f", "Streams Jenkins service logs.", "Debug startup and plugin errors.", "B"],
    ["Initial admin password", "sudo cat /var/lib/jenkins/secrets/initialAdminPassword", "Prints the first-login password.", "First-time setup.", "B", "", "Sensitive: don't share or paste it publicly."],
    ["Safe restart via URL", "http://<jenkins-host>:8080/safeRestart", "Waits for running builds, then restarts. Open in browser as an admin.", "Restart without killing builds.", "I"],
    ["Download CLI jar", "curl -O http://<jenkins-host>:8080/jnlpJars/jenkins-cli.jar", "Gets the Jenkins CLI from your server.", "Script Jenkins tasks.", "I"],
    ["List jobs via CLI", "java -jar jenkins-cli.jar -s http://<host>:8080/ -auth user:API_TOKEN list-jobs", "Lists jobs. Use an API token, never your password.", "Automate admin tasks.", "I"],
    ["Trigger build via CLI", "java -jar jenkins-cli.jar -s http://<host>:8080/ -auth user:API_TOKEN build my-job -s", "Starts a job and waits for completion.", "Trigger builds from scripts.", "I"],
    ["Install plugin via CLI", "java -jar jenkins-cli.jar -s http://<host>:8080/ -auth user:API_TOKEN install-plugin git", "Installs a plugin.", "Automate setup.", "I", "", "Restart may be required; test plugins outside production first."],
    ["Jenkinsfile: basic pipeline", "pipeline {\n  agent any\n  stages {\n    stage('Build') { steps { sh 'make build' } }\n    stage('Test')  { steps { sh 'make test' } }\n  }\n}", "Declarative pipeline with two stages.", "Store CI as code in your repo.", "B"],
    ["Jenkinsfile: Docker build", "stage('Docker') {\n  steps { sh 'docker build -t myapp:${BUILD_NUMBER} .' }\n}", "Builds an image tagged with the build number. Agent needs Docker.", "Unique, traceable image tags.", "I"],
    ["Jenkinsfile: credentials", "withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'U', passwordVariable: 'P')]) {\n  sh 'echo $P | docker login -u $U --password-stdin'\n}", "Injects secrets from Jenkins credentials store.", "Never hardcode secrets.", "I"],
    ["Jenkinsfile: post actions", "post {\n  failure { echo 'Build failed' }\n  always  { cleanWs() }\n}", "Runs steps depending on result.", "Notify and clean workspace.", "I"],
    ["Jenkinsfile: deploy approval", "stage('Deploy') {\n  steps { input message: 'Deploy to prod?'\n          sh './deploy.sh' }\n}", "Pauses for manual approval.", "Gate production releases.", "A", "", "Production-impacting step: restrict who can approve."],
    ["Jenkinsfile: parallel", "stage('Checks') {\n  parallel {\n    stage('Unit') { steps { sh 'make unit' } }\n    stage('Lint') { steps { sh 'make lint' } }\n  }\n}", "Runs stages at the same time.", "Cut pipeline time.", "A"]
  ],
  Kubernetes: [
    ["Cluster info", "kubectl cluster-info", "Shows API server address. Requires a configured kubeconfig.", "Confirm you're connected.", "B"],
    ["Current context", "kubectl config current-context", "Shows which cluster kubectl targets.", "Avoid running commands on the wrong cluster.", "B"],
    ["List pods", "kubectl get pods -A -o wide", "Lists pods in all namespaces with nodes and IPs.", "Overview of workloads.", "B"],
    ["Create namespace", "kubectl create namespace dev", "Creates an isolated namespace.", "Separate environments or teams.", "B"],
    ["Apply manifest", "kubectl apply -f deployment.yaml", "Creates or updates resources from a file.", "Declarative deployments.", "B", "", "Check context first to avoid changing production by mistake."],
    ["Quick deployment", "kubectl create deployment web --image=nginx --replicas=2", "Creates a deployment imperatively.", "Fast test.", "B"],
    ["Expose service", "kubectl expose deployment web --port=80 --type=ClusterIP", "Creates a Service in front of pods.", "Give pods a stable address.", "I"],
    ["Pod logs", "kubectl logs -f <pod> -n dev --tail=100", "Streams a pod's logs.", "Debug app errors.", "B", "Add -p to see the previous crashed container."],
    ["Describe", "kubectl describe pod <pod>", "Shows details and recent Events.", "Find why a pod is Pending or CrashLoopBackOff.", "I"],
    ["Exec into pod", "kubectl exec -it <pod> -- sh", "Opens a shell in a pod.", "Inspect from inside.", "I"],
    ["Scale", "kubectl scale deployment web --replicas=5", "Changes the replica count.", "Handle more load.", "I", "", "Affects capacity and cost; be careful in production."],
    ["Update image", "kubectl set image deployment/web nginx=nginx:1.27", "Triggers a rolling update.", "Release a new version.", "I"],
    ["Rollout status", "kubectl rollout status deployment/web", "Waits and reports rollout progress.", "Verify a deploy; use in CI.", "I"],
    ["Rollback", "kubectl rollout undo deployment/web", "Reverts to the previous revision.", "Recover from a bad release.", "I", "", "Production-impacting: confirm the target revision."],
    ["Port-forward", "kubectl port-forward svc/web 8080:80", "Forwards local port 8080 to the service.", "Test without an Ingress.", "I"],
    ["Delete resources", "kubectl delete -f deployment.yaml", "Deletes resources defined in a file.", "Clean up.", "I", "", "Destructive. Check the namespace and context first."]
  ],
  Terraform: [
    ["Init", "terraform init", "Downloads providers and sets up the backend.", "First step in any new or cloned config.", "B"],
    ["Format", "terraform fmt -recursive", "Auto-formats .tf files.", "Consistent style before commits.", "B"],
    ["Validate", "terraform validate", "Checks syntax and internal consistency without cloud calls.", "Catch errors early in CI.", "B"],
    ["Plan", "terraform plan -out=tfplan", "Shows what would change and saves the plan. Needs cloud credentials.", "Review before changing anything.", "B"],
    ["Apply a saved plan", "terraform apply tfplan", "Applies exactly the reviewed plan.", "Safest apply workflow.", "I", "", "Creates or changes real infrastructure and costs money."],
    ["Show", "terraform show", "Displays current state or a plan in readable form.", "Inspect results.", "I"],
    ["List state", "terraform state list", "Lists resources tracked in state.", "See what Terraform manages.", "I"],
    ["State detail", "terraform state show aws_instance.web", "Shows attributes of one resource.", "Debug drift.", "I"],
    ["Outputs", "terraform output", "Prints output values.", "Get IPs or URLs after apply.", "B"],
    ["Workspace new", "terraform workspace new staging", "Creates a separate state workspace.", "Same config, different environment state.", "I"],
    ["Workspace select", "terraform workspace select staging", "Switches workspace.", "Target the right environment.", "I", "", "Confirm with terraform workspace show before applying."],
    ["Import", "terraform import aws_instance.web i-0123456789abcdef0", "Brings an existing resource into state.", "Adopt manually created infrastructure.", "A", "", "Back up state first; write matching config."],
    ["Targeted plan", "terraform plan -target=aws_instance.web", "Plans only one resource.", "Rare debugging use.", "A", "", "Avoid in routine work; it can hide dependencies."],
    ["Refresh-only plan", "terraform plan -refresh-only", "Detects drift between state and real infrastructure.", "Audit manual changes.", "A"],
    ["Destroy", "terraform destroy", "Deletes all managed infrastructure.", "Tear down test environments.", "A", "", "DANGEROUS: review the plan and never run on production without approval."]
  ],
  Linux: [
    ["List files", "ls -lah", "Long listing with hidden files and readable sizes.", "See permissions and sizes.", "B"],
    ["Find files", "find /var/log -name \"*.log\" -mtime -1", "Finds .log files modified in the last day.", "Locate recent logs.", "I"],
    ["Search text", "grep -rn \"error\" /var/log/app", "Recursively searches for text with line numbers.", "Locate errors.", "B"],
    ["Permissions", "chmod 640 file.txt", "Owner read/write, group read, others none.", "Restrict access.", "B"],
    ["Ownership", "sudo chown -R user:group /srv/app", "Changes owner recursively.", "Fix permission errors.", "I", "", "Wrong path or -R can break a system."],
    ["Processes", "ps aux --sort=-%mem | head", "Top memory-using processes.", "Find resource hogs.", "B"],
    ["Kill process", "kill -15 <PID>", "Asks a process to exit gracefully.", "Stop a hung app. Use -9 only as a last resort.", "I", "", "Check the PID first."],
    ["Disk usage", "df -h && du -sh /var/* | sort -h", "Free space per filesystem and folder sizes.", "Find what fills the disk.", "B"],
    ["Listening ports", "ss -tulpn", "Shows listening ports and processes.", "Check what's exposed. Needs sudo for process names.", "I"],
    ["Test connectivity", "curl -I https://example.com", "Fetches only HTTP headers.", "Check a site or health endpoint.", "B"],
    ["Follow logs", "tail -f /var/log/syslog", "Streams new log lines.", "Live debugging.", "B"],
    ["Service logs", "journalctl -u nginx --since \"1 hour ago\"", "systemd logs for a service.", "Investigate recent failures.", "I"],
    ["Manage services", "sudo systemctl restart nginx", "Restarts a service.", "Apply config changes.", "I", "", "Brief downtime for that service."],
    ["Memory & load", "free -h && uptime", "Memory use and load averages.", "Quick health check.", "B"],
    ["Delete recursively", "rm -rf ./build", "Removes a directory and its contents without prompting.", "Clean build output.", "A", "", "DANGEROUS: no undo. Double-check the path; never run rm -rf / or with unquoted variables."]
  ],
  Bash: [
    ["Script header", "#!/usr/bin/env bash\nset -euo pipefail", "Exit on errors, unset variables, and failed pipes.", "Make scripts fail safely.", "I"],
    ["Variables", "NAME=\"world\"; echo \"Hello, $NAME\"", "Assign without spaces, quote when using.", "Reusable values.", "B"],
    ["Environment variable", "export APP_ENV=production", "Makes a variable visible to child processes.", "Configure apps.", "B", "", "Don't export secrets in shared shell history."],
    ["Show env", "printenv | sort", "Lists environment variables.", "Debug configuration.", "B"],
    ["If statement", "if [[ -f config.yml ]]; then echo found; else echo missing; fi", "Checks if a file exists.", "Conditional logic.", "B"],
    ["For loop", "for f in *.log; do gzip \"$f\"; done", "Repeats an action per file.", "Batch tasks.", "B"],
    ["While read", "while IFS= read -r line; do echo \"$line\"; done < hosts.txt", "Processes a file line by line.", "Handle lists safely.", "I"],
    ["Function", "greet() { echo \"Hi $1\"; }\ngreet Sohail", "Reusable block with arguments.", "Avoid repetition.", "B"],
    ["Pipe", "cat app.log | grep ERROR | sort | uniq -c | sort -rn", "Chains commands: count error types.", "Quick log analysis.", "I"],
    ["Redirect", "./run.sh > out.log 2>&1", "Sends stdout and stderr to a file.", "Capture output.", "B", "", "> overwrites the file; use >> to append."],
    ["Exit codes", "command && echo ok || echo failed; echo $?", "Check success of the last command.", "Error handling.", "B"],
    ["Command substitution", "TODAY=$(date +%F)", "Stores command output.", "Timestamped files.", "B"],
    ["Default value", "PORT=\"${PORT:-8080}\"", "Uses 8080 if PORT is unset.", "Configurable scripts.", "I"],
    ["Cleanup trap", "trap 'rm -f \"$TMP\"' EXIT", "Runs cleanup when the script exits.", "Remove temp files.", "A"],
    ["Debug mode", "bash -x script.sh", "Prints each command as it runs.", "Find bugs. May print secrets.", "I", "", "Debug output may reveal secrets."]
  ],
  AWS: [
    ["Configure CLI", "aws configure", "Prompts for access key, secret, region. Use an IAM user or SSO, never share keys.", "One-time setup. Needs AWS CLI installed.", "B", "", "Never commit credentials to Git."],
    ["Who am I", "aws sts get-caller-identity", "Shows the account and identity in use.", "Verify credentials work.", "B"],
    ["List EC2", "aws ec2 describe-instances --query \"Reservations[].Instances[].[InstanceId,State.Name]\" --output table", "Lists instances. Needs ec2:DescribeInstances.", "Inventory.", "I"],
    ["Start instance", "aws ec2 start-instances --instance-ids i-0123456789abcdef0", "Starts a stopped instance.", "Resume dev servers. Needs ec2:StartInstances.", "I", "", "Starts billing."],
    ["Stop instance", "aws ec2 stop-instances --instance-ids i-0123456789abcdef0", "Stops an instance (EBS data remains).", "Save cost.", "I", "", "Causes downtime."],
    ["Terminate instance", "aws ec2 terminate-instances --instance-ids i-0123456789abcdef0", "Permanently deletes an instance.", "Remove unused servers.", "A", "", "DANGEROUS and irreversible. Verify the ID."],
    ["List buckets", "aws s3 ls", "Lists S3 buckets. Needs s3:ListAllMyBuckets.", "See storage.", "B"],
    ["Upload", "aws s3 cp app.zip s3://my-bucket/releases/", "Uploads a file.", "Store artifacts. Needs s3:PutObject.", "B"],
    ["Sync", "aws s3 sync ./dist s3://my-bucket --dryrun", "Previews syncing a folder to S3.", "Deploy static sites.", "I", "Remove --dryrun to apply.", "Adding --delete removes remote files not present locally."],
    ["List IAM users", "aws iam list-users", "Lists users. Needs iam:ListUsers.", "Access audit.", "I"],
    ["List policies on user", "aws iam list-attached-user-policies --user-name alice", "Shows attached managed policies.", "Review permissions.", "I"],
    ["Create access key", "aws iam create-access-key --user-name ci-user", "Creates a key pair.", "Prefer roles/SSO when possible.", "A", "", "Secret is shown once; store it securely and rotate."],
    ["CloudWatch metrics", "aws cloudwatch list-metrics --namespace AWS/EC2", "Lists available EC2 metrics.", "Find what to monitor.", "I"],
    ["Create alarm", "aws cloudwatch put-metric-alarm --alarm-name high-cpu --namespace AWS/EC2 --metric-name CPUUtilization --dimensions Name=InstanceId,Value=i-0123456789abcdef0 --statistic Average --period 300 --evaluation-periods 2 --threshold 80 --comparison-operator GreaterThanThreshold", "Alarms when average CPU is above 80% for 10 minutes.", "Alerting. Needs cloudwatch:PutMetricAlarm.", "A"],
    ["Tail logs", "aws logs tail /aws/lambda/my-func --follow", "Streams CloudWatch Logs (AWS CLI v2).", "Live debugging.", "I"]
  ],
  Ansible: [
    ["Inventory file", "[web]\n192.168.1.10\n192.168.1.11\n\n[db]\n192.168.1.20", "INI inventory grouping hosts.", "Tell Ansible what to manage.", "B"],
    ["Ping all", "ansible all -i inventory.ini -m ping", "Tests SSH and Python on hosts.", "Verify connectivity. Needs SSH access.", "B"],
    ["Ad hoc command", "ansible web -i inventory.ini -a \"uptime\"", "Runs one command on a group.", "Quick checks.", "B"],
    ["Ad hoc module", "ansible web -i inventory.ini -b -m apt -a \"name=nginx state=present\"", "Installs nginx with sudo (-b).", "One-off changes on Debian/Ubuntu.", "I", "", "Changes real servers."],
    ["Run playbook", "ansible-playbook -i inventory.ini site.yml", "Executes a playbook.", "Apply configuration.", "B", "", "Dry-run first with --check."],
    ["Dry run", "ansible-playbook -i inventory.ini site.yml --check --diff", "Shows what would change.", "Safe preview.", "I"],
    ["Syntax check", "ansible-playbook site.yml --syntax-check", "Validates playbook syntax.", "CI check.", "B"],
    ["Sample playbook", "- hosts: web\n  become: true\n  tasks:\n    - name: Install nginx\n      ansible.builtin.apt:\n        name: nginx\n        state: present\n    - name: Start nginx\n      ansible.builtin.service:\n        name: nginx\n        state: started\n        enabled: true", "Installs and starts nginx idempotently.", "Template for server setup.", "B"],
    ["Variables", "ansible-playbook site.yml -e \"app_port=8080\"", "Passes extra variables.", "Override defaults.", "I"],
    ["Limit hosts", "ansible-playbook site.yml --limit web", "Runs only on a group/host.", "Roll out gradually.", "I"],
    ["Tags", "ansible-playbook site.yml --tags nginx", "Runs only tagged tasks.", "Targeted runs.", "I"],
    ["Create role", "ansible-galaxy init roles/nginx", "Scaffolds a role directory.", "Organize reusable config.", "I"],
    ["Vault encrypt", "ansible-vault encrypt group_vars/all/secrets.yml", "Encrypts a secrets file.", "Keep secrets safe in Git.", "I", "", "Don't lose the vault password."],
    ["Gather facts", "ansible web -i inventory.ini -m setup -a \"filter=ansible_distribution*\"", "Shows OS facts.", "Conditional tasks.", "I"],
    ["List hosts", "ansible-inventory -i inventory.ini --list", "Prints parsed inventory as JSON.", "Debug inventory.", "I"]
  ],
  "CI/CD": [
    ["Jenkinsfile: Git → Docker → K8s", "pipeline {\n  agent any\n  environment { IMAGE = \"myuser/myapp:${BUILD_NUMBER}\" }\n  stages {\n    stage('Checkout') { steps { checkout scm } }\n    stage('Build')    { steps { sh 'docker build -t $IMAGE .' } }\n    stage('Push')     { steps { withCredentials([usernamePassword(credentialsId:'dockerhub',usernameVariable:'U',passwordVariable:'P')]) {\n        sh 'echo $P | docker login -u $U --password-stdin && docker push $IMAGE' } } }\n    stage('Deploy')   { steps { sh 'kubectl set image deployment/web web=$IMAGE && kubectl rollout status deployment/web' } }\n  }\n}", "Checks out code, builds and pushes an image, then rolling-updates a Kubernetes deployment. Agent needs Docker, kubectl, and cluster access.", "End-to-end delivery pipeline.", "A", "", "Deploy stage changes a live cluster: add approval for production."],
    ["GitHub Actions: Docker build", "name: ci\non: [push]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: docker build -t myapp:${{ github.sha }} .", "Builds an image on every push.", "Simple hosted CI.", "I"],
    ["Run tests then build", "npm ci && npm test && docker build -t myapp .", "Stops at the first failure.", "Fail fast in any CI shell step.", "B"],
    ["Tag with commit SHA", "docker build -t myapp:$(git rev-parse --short HEAD) .", "Traceable image tag.", "Know exactly which code is running.", "I"],
    ["Verify rollout in CI", "kubectl rollout status deployment/web --timeout=120s || kubectl rollout undo deployment/web", "Rolls back if rollout fails.", "Automatic recovery.", "A", "", "Needs cluster access and permissions."],
    ["Terraform in CI", "terraform init -input=false && terraform validate && terraform plan -input=false -out=tfplan", "Safe non-interactive checks; apply only after review.", "Infrastructure pipelines.", "A", "", "Never auto-apply to production without approval."]
  ]
};

/* ============ HELPERS ============ */
const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const toastEl = $("#toast");
function toast(m) { toastEl.textContent = m; toastEl.classList.add("show"); clearTimeout(toast.t); toast.t = setTimeout(() => toastEl.classList.remove("show"), 1800); }
function safeUrl(u) { return /^https?:\/\//.test(u) ? u : "#"; }

/* ============ LINKS & STATIC CONTENT ============ */
$("#ghLink").href = $("#gh2").href = safeUrl(CONFIG.github);
$("#liLink").href = $("#li2").href = safeUrl(CONFIG.linkedin);
$("#mailBtn").href = "mailto:" + CONFIG.email;
$("#resumeBtn").href = CONFIG.resume;
$("#aboutText").textContent = CONFIG.about;
$("#yr").textContent = new Date().getFullYear();

/* ============ NAV ============ */
const burger = $("#burger"), menu = $("#menu");
burger.onclick = () => { const o = menu.classList.toggle("open"); burger.setAttribute("aria-expanded", o); };
menu.addEventListener("click", e => { if (e.target.tagName === "A") { menu.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); } });
document.addEventListener("keydown", e => { if (e.key === "Escape") { menu.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); } });
const links = [...menu.querySelectorAll("a[href^='#']")];
const io = new IntersectionObserver(es => es.forEach(en => {
  if (en.isIntersecting) links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id && !a.classList.contains("btn")));
}), { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main section").forEach(s => io.observe(s));
const topBtn = $("#top");
addEventListener("scroll", () => { topBtn.hidden = scrollY < 500; }, { passive: true });
topBtn.onclick = () => scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });

/* ============ HERO SUBTITLE ============ */
(function () {
  const el = $("#typed"), text = CONFIG.subtitles[0];
  if (reduce) { el.textContent = text; return; }
  let i = 0; (function t() { el.textContent = text.slice(0, ++i); if (i < text.length) setTimeout(t, 55); })();
})();

/* ============ COMMAND CENTER ============ */
const cats = ["All", ...Object.keys(DATA)];
const ALL = Object.entries(DATA).flatMap(([cat, rows]) => rows.map(([name, syntax, desc, when, lv, ex, warn]) => ({ cat, name, syntax, desc, when, level: L[lv], ex: ex || "", warn: warn || "" })));
let curCat = "All";
const tabs = $("#tabs");
tabs.innerHTML = cats.map(c => `<button class="tab" role="tab" aria-selected="${c === "All"}" data-c="${esc(c)}">${esc(c)}</button>`).join("");
tabs.addEventListener("click", e => { const b = e.target.closest(".tab"); if (!b) return; curCat = b.dataset.c; tabs.querySelectorAll(".tab").forEach(t => t.setAttribute("aria-selected", t === b)); renderCmds(); });
tabs.addEventListener("keydown", e => {
  const t = [...tabs.children], i = t.indexOf(document.activeElement);
  if (i < 0 || !["ArrowRight", "ArrowLeft"].includes(e.key)) return;
  t[(i + (e.key === "ArrowRight" ? 1 : t.length - 1)) % t.length].focus();
});
$("#q").addEventListener("input", renderCmds);
$("#lvl").addEventListener("change", renderCmds);

function renderCmds() {
  const q = $("#q").value.trim().toLowerCase(), lv = $("#lvl").value;
  const res = ALL.filter(c => (curCat === "All" || c.cat === curCat) && (!lv || c.level === lv) &&
    (!q || [c.name, c.syntax, c.desc, c.when, c.ex, c.cat].join(" ").toLowerCase().includes(q)));
  $("#cmds").innerHTML = res.map((c, i) => `
    <article class="card">
      <div class="head"><h3>${esc(c.name)}</h3><span class="badge ${c.level}">${c.level}</span></div>
      <span class="cat">${esc(c.cat)}</span>
      <div class="snip"><code>${esc(c.syntax)}</code><button class="copy" data-i="${i}" aria-label="Copy command: ${esc(c.name)}">Copy</button></div>
      <p><b>What it does:</b> ${esc(c.desc)}</p>
      <p><b>When to use:</b> ${esc(c.when)}</p>
      ${c.ex ? `<p><b>Example:</b> <code>${esc(c.ex)}</code></p>` : ""}
      ${c.warn ? `<p class="warn"><b>⚠ Warning:</b> ${esc(c.warn)}</p>` : ""}
    </article>`).join("");
  $("#cmds").dataset.res = "";
  $("#cmds")._res = res;
  $("#empty").hidden = res.length > 0;
  $("#count").textContent = res.length + " command" + (res.length === 1 ? "" : "s") + " shown";
}
$("#cmds").addEventListener("click", async e => {
  const b = e.target.closest(".copy"); if (!b) return;
  const text = $("#cmds")._res[+b.dataset.i].syntax;
  try { await navigator.clipboard.writeText(text); }
  catch { const ta = document.createElement("textarea"); ta.value = text; document.body.appendChild(ta); ta.select(); document.execCommand("copy"); ta.remove(); }
  b.textContent = "Copied!"; toast("Command copied to clipboard"); setTimeout(() => b.textContent = "Copy", 1500);
});
renderCmds();

/* ============ DEMO TERMINAL (not a real shell) ============ */
const demo = [
  ["whoami", "sohail"], ["uname -sr", "Linux 6.x"], ["docker ps --format '{{.Names}}: {{.Status}}'", "web: Up 2 hours\ndb: Up 2 hours"],
  ["kubectl get pods", "NAME        READY   STATUS    RESTARTS\nweb-7d9f    1/1     Running   0"], ["terraform plan", "No changes. Infrastructure matches the configuration."],
  ["echo \"Demo output only\"", "Demo output only"]
];
(async function () {
  const body = $("#termBody"), wait = ms => new Promise(r => setTimeout(r, ms));
  const line = (cmd, out) => `<span class="p">sohail@devops</span>:<span class="c">~</span>$ <span class="w">${esc(cmd)}</span>\n<span class="o">${esc(out)}</span>\n`;
  if (reduce) { body.innerHTML = demo.map(d => line(...d)).join(""); return; }
  for (;;) {
    body.innerHTML = ""; let html = "";
    for (const [cmd, out] of demo) {
      const pre = `<span class="p">sohail@devops</span>:<span class="c">~</span>$ `;
      for (let i = 1; i <= cmd.length; i++) { body.innerHTML = html + pre + `<span class="w">${esc(cmd.slice(0, i))}</span>`; await wait(35); }
      html += line(cmd, out); body.innerHTML = html; body.scrollTop = body.scrollHeight; await wait(700);
    }
    await wait(2500);
  }
})();

/* ============ PROJECTS / SKILLS / CERTS ============ */
$("#projGrid").innerHTML = CONFIG.projects.map(p => `
  <article class="card"><div class="head"><h3>${esc(p.title)}</h3><span class="badge Intermediate">Example</span></div>
  <p><b>Problem:</b> ${esc(p.problem)}</p><p><b>Solution:</b> ${esc(p.solution)}</p>
  <div class="tags">${p.tech.map(t => `<span>${esc(t)}</span>`).join("")}</div>
  <details><summary>Project details</summary><p><b>Key learning outcomes:</b> ${esc(p.learn)}</p><p class="note">Editable example, not a verified achievement.</p></details>
  <a class="btn ghost" href="${esc(safeUrl(p.repo))}" target="_blank" rel="noopener" aria-label="GitHub repository for ${esc(p.title)}">GitHub Repository</a></article>`).join("");
$("#skillGrid").innerHTML = Object.entries(CONFIG.skills).map(([k, v]) => `
  <div class="card"><h3>${esc(k)}</h3><div class="tags">${v.map(s => `<span>${esc(s)}</span>`).join("")}</div></div>`).join("");
$("#certGrid").innerHTML = CONFIG.certs.map(c => `
  <div class="card"><h3>${esc(c.name)}</h3><p>${esc(c.issuer)}</p><p class="cat">${esc(c.status)}</p>
  ${c.url ? `<a href="${esc(safeUrl(c.url))}" target="_blank" rel="noopener">View credential: ${esc(c.name)}</a>` : `<p class="note">Add a credential URL in CONFIG.certs</p>`}</div>`).join("");

/* ============ CONTACT FORM ============ */
const form = $("#form"), status = $("#status");
form.addEventListener("submit", async e => {
  e.preventDefault();
  const f = { name: form.name.value.trim(), email: form.email.value.trim(), message: form.message.value.trim() };
  const errs = {
    name: f.name.length < 2 ? "Please enter your name." : "",
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email) ? "" : "Please enter a valid email address.",
    msg: f.message.length < 10 ? "Message should be at least 10 characters." : ""
  };
  ["name", "email", "msg"].forEach(k => { $("#e-" + k).textContent = errs[k]; $("#" + k).setAttribute("aria-invalid", !!errs[k]); });
  status.className = "";
  if (Object.values(errs).some(Boolean)) { status.textContent = "Please fix the highlighted fields."; status.className = "bad"; return; }
  if (CONFIG.formEndpoint) {
    try {
      const r = await fetch(CONFIG.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(f) });
      if (!r.ok) throw 0;
      status.textContent = "Thanks! Your message was sent."; status.className = "ok"; form.reset();
    } catch { status.textContent = "Sorry, sending failed. Please email me directly."; status.className = "bad"; }
  } else {
    location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent("Portfolio message from " + f.name)}&body=${encodeURIComponent(f.message + "\n\nFrom: " + f.name + " (" + f.email + ")")}`;
    status.textContent = "Opening your email app. (No form backend is configured.)"; status.className = "ok";
  }
});


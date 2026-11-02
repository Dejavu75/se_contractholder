# Remove development compiler tools from shared runtime dependencies
Objective: keep DTO/contract exports unchanged while removing the development-tool vulnerability chain.
Branch: codex/nages-se-contractholder-security; delivery: ask-on-risk; checks: node:test, TypeScript and consumer fixtures. Forecast: fewer than 150 authored lines.

## Specs
- S1. User: "Sí, incluir los repos compartidos" for shared-package remediation and compatibility checks before integration.
- S2. Keep runtime contract exports and behavior unchanged. Move ts-node-dev to devDependencies, remove the redundant npm tsc shim in favor of already-declared TypeScript, and make the existing compile script resolve TypeScript unambiguously. Remove the proven-unused se_configbase dependency and @types/se_configbase alias to prevent their old Git cycle from reintroducing vulnerable runtime dependencies. Preserve development commands; no contract/schema/DB changes.
- S3. Verify production package loading/consumer builds without development runners; integrate reviewed changes through the authorized GitHub session, then update consumers deliberately.

## Tasks
- T1 | S1-S2 | parent inline | implemented locally: dependency classification and regression check RED (0/1) then GREEN (1/1); compatibility and integration pending.
- T2 | S1-S3 | external compatibility checks and independent verifier | complete: compile, 30-export runtime load and 4/4 regression tests; public-only lock/omit-dev checks passed; independent scoped verifier PASS. Consumers still require deliberately updated shared commits.
- T3 | S3 | parent GitHub integration | pending: reviewed commit and consumer lock refresh.

## Log
- L1. Fresh maine7f6b11174a21fa95ee5dc2e70cb933e0d72ba12; original checkout untouched. ts-node-dev/tsc were declared as runtime dependencies but used as development scripts. The npm tsc shim reproduced a compiler failure in consumer tests.

- L3. 2026-11-02: baseline node --test tests/runtime-dependencies.test.cjs failed 1/1; after package declarations it passed 1/1. Removed runtime development tools and resolved TypeScript explicitly; no API implementation bytes changed. Risk: items2/5 (security dependencies and runtime delivery). Composite compatibility checks delegated to ci_cou before lock/main changes.

- L4. External composite compilation passed for both shared packages; Nodemailer10.1.4 real stream compatibility4/4 and consumer MS01 25/25, CH01 15/15 on Node22.22.2. Parent permanent suites: configbase5/5 and holder1/1; repeated in isolated Node24.22.2 Docker (--network none, read-only source/dependencies, tmpfs scratch) with same passes. No SMTP/DB/application started. Independent ci_ch01 verification found no candidate-caused blockers; actual Git locks and integration remain pending. Runtime docs and tests carry no baseline/history dependency.

- L5. Read-only CodeGraph/source cycle map found zero holder imports of se_configbase in TS/JS/declarations; parent exact gitgrep corroborated. Removing unused reverse dependency and @types alias breaks the old Git closure without changing contracts. New test observed RED1/2 then GREEN2/2. Configbase-to-holder runtime edge retained. Old lock proposals are superseded as candidates, never adopted; public-only new holder lock/build verification is in progress before final candidate freeze.

- L6. Final holder lock copied only after root dependency semantic equality; SHA2567F5CAC28... has zero Git entries. External public-only lock generation/npmciomitdev and full compile passed with SSH transport blocked. Parent Node24.22.2 readonly/network-none production load exposed30exports and failed to resolve se_configbase/nodemailer/ts-node-dev/tsc as expected; regression suite4/4 passed on Node22 and24. Independent scoped verifier confirmed unchanged source/build and lock/declaration consistency,4/4 in freshscratch. Risk: items2/5. Native assessment high/review_due; review/main integration remain pending.

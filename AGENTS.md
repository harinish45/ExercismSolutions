# AGENTS & Autonomous Tool Conventions

## Project Rules & Language Invariants

1. **Java Track Guidelines (AIR Standard):**
   - Explicit types (avoid `var`).
   - Keep methods focused (under 20 lines).
   - Prefer immutability (`final` variables and fields).
   - Use `Optional` instead of null returns.
   - Specific exception handling.

2. **Python Track Guidelines:**
   - Strict type hints on all arguments and return values.
   - Standard docstrings matching Sphinx or Google format.
   - Format with `black` or `ruff`.

3. **JavaScript Track Guidelines:**
   - ES6+ modules with explicit `export` statements.
   - Include JSDoc annotations with `// @ts-check`.

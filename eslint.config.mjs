import {defineConfig, globalIgnores} from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = defineConfig([
    globalIgnores([".next/**", "node_modules/**", "out/**"]),
    ...nextCoreWebVitals,
]);

export default eslintConfig;

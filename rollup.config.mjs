import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import PeerDepsExternal from "rollup-plugin-peer-deps-external";

import pkg from './package.json' assert { type: 'json' };

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: pkg.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: pkg.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        external: ["react", "react-dom"],
        plugins: [
            PeerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
            postcss({
                config: {
                    path: "./postcss.config.js"
                },
                extensions: [".css"],
                minimize: true,
                inject: {
                    insertAt: "top"
                }
            }),
            terser(),
        ],
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
        external: [/\.(css|less|scss)$/]
    },
];
import { Example } from "./Example";

import styles from "./Example.module.css";

const DEFAULT_EXAMPLES: string[] = [
    "¿Qué está incluido en mi plan de seguro médico que no incluye el IGSS?",
    "¿Qué sucede en una evaluación de desempeño?",
    "¿Qué hace un Gerente de Producto?"
];

const GPT4V_EXAMPLES: string[] = [
    "Compara el impacto de las tasas de interés y el PIB en los mercados financieros en Guatemala.",
    "¿Cuál es la tendencia esperada para el índice S&P 500 en los próximos cinco años? Compáralo con el rendimiento pasado del S&P 500.",
    "¿Puedes identificar alguna correlación entre los precios del petróleo y las tendencias del mercado de valores?"
];

interface Props {
    onExampleClicked: (value: string) => void;
    useGPT4V?: boolean;
}

export const ExampleList = ({ onExampleClicked, useGPT4V }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {(useGPT4V ? GPT4V_EXAMPLES : DEFAULT_EXAMPLES).map((question, i) => (
                <li key={i}>
                    <Example text={question} value={question} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};

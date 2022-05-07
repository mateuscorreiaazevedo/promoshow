export const border = "0.0625em solid #3498d8";

export const colors = {
    primary: "#3498d8",
    secundary: "#999",
    light: "#fff",
    dark: "#333"
}

export const Btn = `
    position: absolute;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: .0625em;
    border: ${border};
    width: 8em;
    text-align: end;
    padding: .5em;
    border-radius: .5em;
    transition: all 300ms ease;
    color: ${colors.primary};

    &:hover {
        width: 10em;
        text-align: center;
    }
`
export const InputDefault = `
    width: 100%;
    height: 2.5em;
    padding: .5em 2em;
    border: ${border};
    border-radius: .5em;
    color: ${colors.secundary};

    &:focus {
        outline: ${border};
    }
`
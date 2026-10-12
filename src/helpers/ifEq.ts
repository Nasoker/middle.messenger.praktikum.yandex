
export default function ifEq(this: unknown, a: string, b: string, options: Handlebars.HelperOptions) {
    return a === b ? options.fn(this) : options.inverse(this);
}

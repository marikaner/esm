export async function go() {
  const { getProperty } = await import('dot-prop');

  const obj = { foo: { bar: 'unicorn' } };

  console.log(getProperty(obj, 'foo.bar'));
}

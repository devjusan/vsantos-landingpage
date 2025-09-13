type Item<T> = T;

type KeyExtractor<T> = (item: T) => string | number;

function sameFn<T>(item: T) {
  return item as unknown as string;
}

/** @returns a map of items by key */
export function keyMap<T>(items: Array<T>, keyExtractor?: KeyExtractor<T>) {
  const _items = items || [];
  const key = keyExtractor ?? sameFn;
  const map = new Map() as Map<string | number, Item<T>>;

  for (let index = 0; index < _items.length; index += 1) {
    const item = _items[Number(index)] as Item<T>;
    const keyValue = key(item);

    map.set(keyValue, {
      ...item,
    });
  }

  return {
    entries: () => Array.from(map.entries()),
    values: () => Array.from(map.values()),
    map,
  };
}

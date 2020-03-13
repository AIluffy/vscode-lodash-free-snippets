# lodash-free-snippets README

If you use lodash daily, you may want to live a world without lodash(probably you dont). it's a snippet collection inspired from [You-Dont-Need-Lodash-Underscore](https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore).
The snippets are fully tested, so you can use it with confidence.

## Supported languages (file extensions)

-   Javascript (.js)
-   Javascript React (.jsx)
-   Typescript (.ts)
-   Typescript React (.tsx)

## Basic Methods

### Array

|           Prefix | Description                                                                                                                                             |
| ---------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
|         `_chunk` | `Creates an array of elements split into groups the length of size`                                                                                     |
|       `_compact` | `Creates an array with all falsy values removed`                                                                                                        |
|        `_concat` | `Creates a new array concatenating array with any additional arrays and/or values`                                                                      |
|    `_difference` | `Similar to without, but returns the values from array that are not present in the other arrays`                                                        |
|          `_drop` | `Creates a slice of array with n elements dropped from the beginning`                                                                                   |
|     `_dropRight` | `Creates a slice of array with n elements dropped at the end`                                                                                           |
|          `_fill` | `Fills elements of array with value from start up to, but not including, end. Note that fill is a mutable method in both native and Lodash/Underscore.` |
|          `_find` | `Returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.`                    |
|     `_findIndex` | `Returns the index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned.`                           |
|         `_first` | `Returns the first element of an array. Passing n will return the first n elements of the array.`                                                       |
|       `_flatten` | `Flattens array a single level deep.`                                                                                                                   |
|   `_flattenDeep` | `Recursively flattens array.`                                                                                                                           |
|     `_fromPairs` | `Returns an object composed from key-value pairs.`                                                                                                      |
|          `_head` | `Gets the first element`                                                                                                                                |
|         `_.tail` | `Gets all but the first element.`                                                                                                                       |
|       `_indexOf` | `Returns the first index at which a given element can be found in the array, or -1 if it is not present.`                                               |
|  `_intersection` | `Returns an array that is the intersection of all the arrays. Each value in the result is present in each of the arrays`                                |
|     `_takeRight` | `Creates a slice of array with n elements taken from the end.`                                                                                          |
|       `_isArray` | `Returns true if given value is an array`                                                                                                               |
| `_isArrayBuffer` | `Checks if value is classified as an ArrayBuffer object`                                                                                                |
|          `_join` | `Joins a list of elements in an array with a given separator`                                                                                           |
|          `_last` | `Returns the last element of an array. Passing n will return the last n elements of the array`                                                          |
|   `_lastIndexOf` | `Returns the index of the last occurrence of value in the array, or -1 if value is not present.`                                                        |
|       `_reverse` | `Reverses array so that the first element becomes the last, the second element becomes the second to last, and so on`                                   |
|         `_slice` | `Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included)`                                 |
|       `_without` | `Returns an array where matching items are filtered.`                                                                                                   |

### Collection

|         Prefix | Description                                                                                                                  |
| -------------: | ---------------------------------------------------------------------------------------------------------------------------- |
|  `_each-array` | `Iterates over a list of elements, yielding each in turn to an iteratee function`                                            |
| `_each-object` | `Iterates over a list of elements, yielding each in turn to an iteratee function`                                            |
|       `_every` | `Tests whether all elements in the array pass the test implemented by the provided function.`                                |
|      `_filter` | `Creates a new array with all elements that pass the test implemented by the provided function.`                             |
|     `_groupBy` | `Group items by key.`                                                                                                        |
|    `_includes` | `Checks if a value is in collection.`                                                                                        |
|       `_keyBy` | `Creates an object composed of keys generated from the results of running each element of collection through iteratee.`      |
|         `_map` | `Translates all items in an array or object to new array of items.`                                                          |
|       `_minBy` | `Use Array#reduce for find the minimum collection item`                                                                      |
|       `_maxBy` | `Use Array#reduce for find the maximum collection item`                                                                      |
|      `_reduce` | `Applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.` |
|       `_range` | `Creates an array of numbers progressing from start up to.`                                                                  |
| `_reduceRight` | `This method is like _.reduce except that it iterates over elements of collection from right to left.`                       |
|      `_sample` | `Gets a random element from array.`                                                                                          |
|        `_size` | `Returns the number of values in the collection.`                                                                            |
|        `_some` | `Tests whether any of the elements in the array pass the test implemented by the provided function.`                         |
|      `_sortBy` | `Sorts an array of object based on an object key provided by a parameter`                                                    |
|     `_orderBy` | `Sorts an array of object based on an object key provided by a parameter`                                                    |
|        `_uniq` | `Produces a duplicate-free version of the array, using === to test object equality.`                                         |

### Function

|     Prefix | Description                                        |
| ---------: | -------------------------------------------------- |
| `_partial` | `Create a new function that calls func with args.` |

### Lang

|         Prefix | Description                                         |
| -------------: | --------------------------------------------------- |
|     `_isEmpty` | `Checks if value is an empty object or collection.` |
|    `_isFinite` | `Converts value to a finite number.`                |
|   `_isInteger` | `Checks if value is an integer.`                    |
|       `_isNaN` | `Checks if a value is NaN.`                         |
|       `_isNil` | `Checks if value is null or undefined.`             |
|      `_isNull` | `Checks if value is null or undefined.`             |
| `_isUndefined` | `Checks if value is undefined.`                     |

### Object

|     Prefix | Description                                                                                                                                |
| ---------: | ------------------------------------------------------------------------------------------------------------------------------------------ |
|  `_assign` | `The method is used to copy the values of all enumerable own properties from one or more source objects to a target object.`               |
|  `_extend` | `The method is used to copy the values of all enumerable own and inherited properties from one or more source objects to a target object.` |
|     `_get` | `Gets the value at path of object. Note: If provided path does not exists inside the object js will generate error.`                       |
|    `_keys` | `Retrieves all the names of the object's own enumerable properties.`                                                                       |
|    `_omit` | `Returns a copy of the object, filtered to omit the keys specified.`                                                                       |
|    `_pick` | `Creates an object composed of the object properties predicate returns truthy for.`                                                        |
|  `_pickBy` | `Creates an object composed of the object properties predicate returns truthy for.`                                                        |
| `_toPairs` | `Retrieves all the given object's own enumerable property [ key, value ] pairs.`                                                           |
|  `_values` | `Retrieves all the given object's own enumerable property values.`                                                                         |

### String

|        Prefix | Description                                                                                                                    |
| ------------: | ------------------------------------------------------------------------------------------------------------------------------ |
|   `_endsWith` | `Checks if string ends with the given target string.`                                                                          |
|   `_isString` | `Checks if string ends with the given target string.`                                                                          |
|   `_padStart` | `Pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length.` |
|     `_padEnd` | `Pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length.` |
| `_startsWith` | `Checks if string starts with the given target string.`                                                                        |
|     `_repeat` | `Repeats the given string n times.`                                                                                            |
|    `_replace` | `returns a new string with some or all matches of a pattern replaced by a replacement`                                         |
|      `_split` | `Splits string by separator.`                                                                                                  |
|    `_toLower` | `Lowercases a given string.`                                                                                                   |
|    `_toUpper` | `Uppercases a given string.`                                                                                                   |
|       `_trim` | `Removes the leading and trailing whitespace characters from a string.`                                                        |
| `_upperFirst` | `Uppercases the first letter of a given string`                                                                                |
|       `_uniq` | `Removes all duplicates entries from an array.`                                                                                |
|       `_trim` | `Removes the leading and trailing whitespace characters from a string.`                                                        |

### Util

|   Prefix | Description                                                                           |
| -------: | ------------------------------------------------------------------------------------- |
| `_times` | `Invokes the iteratee n times, returning an array of the results of each invocation.` |

### Number

|       Prefix | Description                                                                                                                                                                                                                                                                         |
| -----------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `_clamp` | `Clamps number within the inclusive lower and upper bounds.`                                                                                                                                                                                                                        |
|   `_inRange` | `Checks if n is between start and up to, but not including, end. If end is not specified, it's set to start with start then set to 0. If start is greater than end the params are swapped to support negative ranges.`                                                              |
|    `_random` | `Produces a random number between the inclusive lower and upper bounds. If only one argument is provided a number between 0 and the given number is returned. If floating is true, or either lower or upper are floats, a floating-point number is returned instead of an integer.` |
| `_randomInt` | `Produces a random number between the inclusive lower and upper bounds. If only one argument is provided a number between 0 and the given number is returned. If floating is true, or either lower or upper are floats, a floating-point number is returned instead of an integer.` |

## Release Notes

### 1.0.0

Initial release of lodash-free-snippets

---

**Enjoy!**

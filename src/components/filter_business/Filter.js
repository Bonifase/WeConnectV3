import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';

const colors = [
  'Red',
  'Orange',
  'Yellow',
  'Green',
  'Blue',
  'Purple',
  'Black',
  'White',
];

const fruit = [
  'Apple', 'Apricot', 'Avocado',
  'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry',
];

/**
 * Two examples of filtering. The first uses `caseInsensitiveFilter`, the second uses `fuzzyFilter`,
 * and limits the number of results displayed using the `maxSearchResults` property.
 */
const AutoCompleteExampleFilters = () => (
  <div>
    <AutoComplete
      floatingLabelText="Type 'r', case insensitive"
      filter={AutoComplete.caseInsensitiveFilter}
      dataSource={colors}
    />
    <br />
    <AutoComplete
      floatingLabelText="Type 'Banana', fuzzy search"
      filter={AutoComplete.fuzzyFilter}
      dataSource={fruit}
      maxSearchResults={5}
    />
  </div>
);

export default AutoCompleteExampleFilters;

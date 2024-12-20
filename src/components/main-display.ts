export const appHTML = `
<div id="main-cont">
  <h1>Zoo</h1>
  <p>Click on a species to see the animals of that species</p>
  <div id="sub-cont">
  <div class="b-cont">
  <h2>Species</h2>
  <table>
    <thead>
      <tr>
        <th>Species</th>
        <th>Count</th>
      </tr>
    </thead>
    <tbody id="species-row"></tbody>
  </table>
  </div>
   <div class="b-cont">
  <h2>Animals</h2>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Species</th>
        <th>Age</th>
      </tr>
    </thead>
    <tbody id="animals-row"></tbody>
  </table>
  </div>
 <div class="b-cont">
  <h2>Selected Species</h2>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Species</th>
        <th>Age</th>
      </tr>
    </thead>
    <tbody id="selected-row"></tbody>
  </table>
  </div>
  </div>

  <template id="animal-template">
    <tr class="animal-row">
      <td class="animal-id"></td>
      <td class="animal-name"></td>
      <td class="animal-species"></td>
      <td class="animal-age"></td>
    </tr>
  </template>

  <template id="species-template">
    <tr class="species-row">
      <td class="species-name"></td>
      <td class="species-count"></td>
    </tr>
  </template>
</div>
`;


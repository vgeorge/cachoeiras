import fs from 'fs-extra';
import lodash from 'lodash';

// TODO
// - intro section
// - link to versions (include in overpass)
// - links to OSM
// - links to tags
// - save markdown with timestamp

// Entry point
(async () => {
  try {
    const { features: beforeArray } = await fs.readJSON('./cachoeiras.geojson');
    const afterArray = (
      await fs.readJSON('./cachoeiras-new.geojson')
    ).features.map((f) => ({
      type: 'Feature',
      id: f.id,
      properties: {
        '@id': f.id,
        ...f.properties.tags,
      },
      geometry: f.geometry,
    }));
    console.log(afterArray);

    // "Added" section
    console.log('## Added objects\n');
    lodash.differenceBy(beforeArray, afterArray, 'id').forEach((e) => {
      console.log(` - ${e.id}`);
    });

    // "Removed" section
    console.log('## Removed objects\n');
    lodash.differenceBy(afterArray, beforeArray, 'id').forEach((e) => {
      console.log(` - ${e.id}`);
    });

    // "Changed section"
    console.log('## Changed objects\n');
    const before = lodash.keyBy(beforeArray, 'id');
    const after = lodash.keyBy(afterArray, 'id');
    lodash.intersectionBy(afterArray, beforeArray, 'id').forEach(({ id }) => {
      const beforeObject = before[id];
      const afterObject = after[id];
      if (!lodash.isEqual(beforeObject, afterObject)) {

        // Get all keys applied to these objects
        const allKeys = lodash.uniq(
          Object.keys(beforeObject.properties).concat(
            Object.keys(afterObject.properties)
          )
        );

        // Verify changes in tags
        const diffMessages = [];
        allKeys.forEach((key) => {
          const beforeValue = lodash.get(beforeObject, `properties.${key}`);
          const afterValue = lodash.get(afterObject, `properties.${key}`);

          if (
            typeof beforeValue === 'undefined' &&
            typeof afterValue !== 'undefined'
          ) {
            diffMessages.push(`    - Set \`${key}=${afterValue}\``);
          } else if (
            typeof beforeValue !== 'undefined' &&
            typeof afterValue === 'undefined'
          ) {
            diffMessages.push(`    - Unset \`${key}=${beforeValue}\``);
          } else if (beforeValue === afterArray) {
            diffMessages.push(
              `    - Changed \`${key}\` from \`${beforeValue}\` to \`${afterValue}\``
            );
          }
        });

        if (!lodash.isEqual(beforeObject.geometry, afterObject.geometry)) {
          diffMessages.push('    - Geometry has changed');
        }

        if (diffMessages.length > 0) {
          console.log(`  - ${id}`);
          console.log(diffMessages.sort().join('\n'))
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
})();

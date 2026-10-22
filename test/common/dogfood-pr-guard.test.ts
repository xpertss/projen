import { dogfoodBranches, skipDogfoodPrCondition } from '../../src/common/dogfood-pr-guard';

describe('dogfoodBranches', () => {
  test('collects distinct literal branch inputs', () => {
    expect(
      dogfoodBranches([
        { inputs: { branch: 'test/a' } },
        { inputs: { branch: 'test/a' } },
        { inputs: { branch: 'test/b' } },
      ]),
    ).toEqual(['test/a', 'test/b']);
  });

  test('skips expression and missing branches', () => {
    expect(
      dogfoodBranches([
        { inputs: { branch: 'test/${{ github.run_id }}' } },
        { inputs: {} },
        {},
      ]),
    ).toEqual([]);
    expect(dogfoodBranches()).toEqual([]);
  });
});

describe('skipDogfoodPrCondition', () => {
  test('is undefined with no branches', () => {
    expect(skipDogfoodPrCondition([])).toBeUndefined();
  });

  test('compares a single branch directly and always requires a same-repo head', () => {
    expect(skipDogfoodPrCondition(['test/dogfood'])).toBe(
      "github.head_ref != 'test/dogfood' || github.event.pull_request.head.repo.full_name != github.repository",
    );
  });
});

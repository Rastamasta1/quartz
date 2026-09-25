import { describe, test } from "node:test"
import assert from "node:assert/strict"
import { getCondition } from "./conditions"
import type { QuartzComponentProps } from "../../components/types"

function makeProps(slug: string): QuartzComponentProps {
  return { fileData: { slug } } as unknown as QuartzComponentProps
}

describe("conditions", () => {
  test("index page: is-index holds, not-index fails", () => {
    const props = makeProps("index")
    const isIndex = getCondition("is-index")
    const notIndex = getCondition("not-index")

    assert.ok(isIndex, "is-index condition should be registered")
    assert.ok(notIndex, "not-index condition should be registered")

    assert.equal(isIndex!(props), true)
    assert.equal(notIndex!(props), false)
  })

  test("non-index page: is-index fails, not-index holds", () => {
    const props = makeProps("about")
    const isIndex = getCondition("is-index")
    const notIndex = getCondition("not-index")

    assert.ok(isIndex, "is-index condition should be registered")
    assert.ok(notIndex, "not-index condition should be registered")

    assert.equal(isIndex!(props), false)
    assert.equal(notIndex!(props), true)
  })
})

import { describe, test } from "node:test"
import assert from "node:assert/strict"
import { getCondition } from "./conditions"
import type { QuartzComponentProps } from "../../components/types"

describe("conditions", () => {
  test("is-index and not-index evaluate correctly on an index page", () => {
    const props = { fileData: { slug: "index" } } as unknown as QuartzComponentProps

    const isIndex = getCondition("is-index")
    const notIndex = getCondition("not-index")

    assert.ok(isIndex, "is-index condition should be registered")
    assert.ok(notIndex, "not-index condition should be registered")

    assert.equal(isIndex!(props), true)
    assert.equal(notIndex!(props), false)
  })

  test("is-index and not-index evaluate correctly on a non-index page", () => {
    const props = { fileData: { slug: "about" } } as unknown as QuartzComponentProps

    const isIndex = getCondition("is-index")
    const notIndex = getCondition("not-index")

    assert.ok(isIndex, "is-index condition should be registered")
    assert.ok(notIndex, "not-index condition should be registered")

    assert.equal(isIndex!(props), false)
    assert.equal(notIndex!(props), true)
  })
})

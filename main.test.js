import { test, expect } from 'vitest'
import { decodeMichaelsMessage } from "./main"

// test('fishey test should pass', () => {  
// })

// test('returns the argument string', () => {
//     expect(decodeMichaelsMessage("Intermittent")).toBe('Intermittent')
// })

// test('returns the argument string as an array', () => {
//     expect(decodeMichaelsMessage("Intermittent")).toBe(['I', 'n', 't', 'e', 'r', 'm', 'i', 't', 't', 'e', 'n', 't'])
// })

// test('returns first index of string array', () => {
//     expect(decodeMichaelsMessage("Intermittenti")).toBe('I')
// })

// test('returns first index of string array and every index after a whitesace', () => {
//     expect(decodeMichaelsMessage("intermittent gusts near oxford. rain easing. temperatures hovering early. residents expect showers. tomorrow's radar anticipates isolated northward inland nasty gales. outlook relatively dry. expect rain")).toBe('ignoretherestrainingorder')
// })

test('first letter of a long string ', () => {
    expect(decodeMichaelsMessage("ipswich likely overcast. various expected. york outlook uncertain.")).toBe('iloveyou')
})


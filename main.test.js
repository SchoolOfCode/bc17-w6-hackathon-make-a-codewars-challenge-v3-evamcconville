import { test, expect } from 'vitest'
import { decodeMichaelsMessage } from "./main"

// test('fishey test should pass', () => {  
// })

// test('first letter of one word', () => {
//     expect(decodeMichaelsMessage("Intermittenting")).toBe('I')
// })

// test('first letter of two words', () => {
//     expect(decodeMichaelsMessage("Intermittenting gusts")).toBe('Ig')
// })

// test('first letter of long string', () => {
//     expect(decodeMichaelsMessage("intermittent gusts near oxford. rain easing. temperatures hovering early. residents expect showers. tomorrow's radar anticipates isolated northward inland nasty gales. outlook relatively dry. expect rain")).toBe('ignoretherestrainingorder')
// })

test('first letter of another long string ', () => {
    expect(decodeMichaelsMessage("ipswich likely overcast. various expected. york outlook uncertain.")).toBe('iloveyou')
})

import type { WordEntry } from '../types';

/**
 * The LexoLume starter lexicon.
 *
 * To add a word, copy any entry, give it a new unique `id`, and fill in the fields.
 * Coined words should earn their place: each one names a real gap that no existing word covers.
 * `examples` are short scenes (3 is the target, each in a different context) that show the word happening
 * in ordinary life; `nearMiss` is one scene that looks like the word but isn't.
 * Order doesn't matter; the app rotates through whatever is here, however few words there are.
 */
export const lexicon: WordEntry[] = [
  {
    id: 'lexolumosity',
    word: 'Lexolumosity',
    pronunciation: 'lek-so-loo-MOS-ih-tee',
    originType: 'coined',
    etymologyOrRoots:
      'Coined. Greek léxis (word) + Latin lūmen (light) + -osity (a state or quality).',
    definition:
      'The clarity that comes when having a word for a state of being brings that state into sharp focus and makes it observable in real life.',
    perceptualLens:
      'You start to notice the moment a vague feeling becomes a nameable thing. Once it has a name you can see it, catch it early, and choose what to do with it.',
    shadowState:
      'Lexical fog: living inside feelings you can only call "fine," "off," or "stressed." Its counterfeit is labeling for show, collecting impressive words without ever looking for the thing they name.',
    fieldPrompt:
      'Today, when you catch yourself saying "I feel weird" or "it was fine," stop and look for a more exact word. Notice whether the moment changes once it is named.',
    examples: [
      { context: 'relationships', scene: "A friend says they're \"just tired.\" You've been thinking about the word \"depleted,\" so you ask whether it's sleep tired or people tired. They pause and say, \"People. Definitely people.\" The conversation goes somewhere real." },
      { context: 'work', scene: "You've called a project \"stressful\" for weeks. Then you realize the actual feeling is dread about one meeting, not the work itself. Once it has that name, you can see the dread start every Sunday night, and you can do something about it." },
      { context: 'solitude', scene: "Reading late, you meet the word \"wistful\" and recognize the exact feeling you had driving past your old school last week. The memory sharpens. You now notice wistfulness when it starts, instead of only having \"a weird mood\" afterward." },
    ],
    nearMiss: {
      scene: "You learn the word \"schadenfreude\" and start using it in conversation to sound sharp, without ever catching the feeling in yourself.",
      whyNot: "The word is being worn, not used as a lens. Lexolumosity is when a word helps you see something in your own life that you couldn't see before.",
    },
    tags: ['language', 'attention', 'meta'],
  },
  {
    id: 'lexoduction',
    word: 'Lexoduction',
    pronunciation: 'lek-so-DUK-shun',
    originType: 'coined',
    etymologyOrRoots:
      'Coined. Greek léxis (word) + Latin dūcere (to lead), as in seduction and abduction.',
    definition:
      "The manipulation of a person or group's thoughts or opinions by another party through steering the words they use. It works by changing their vocabulary, so that their thinking follows the new words into the other party's view of the world.",
    perceptualLens:
      'You start to hear the moment someone swaps your word for theirs, or keeps using a term until it becomes yours. You notice which words arrived in your vocabulary from a particular group, company, or person, and what view of the world each one carries in with it.',
    shadowState:
      'Its absence is unnoticed capture: speaking a group\'s vocabulary without remembering when you picked it up, and thinking inside its assumptions without ever having agreed to them. Its counterfeit is reflexive suspicion, rejecting every new word as an attack so that you stop learning from anyone.',
    shadowNuanceNote:
      'Lexoduction is manipulation whatever the intent. A teacher, a friend, a cause you believe in, and a marketer can all do it, and well-meant lexoduction is still lexoduction. Seeing it clearly doesn\'t mean refusing it. You can notice the steering and still adopt the word on purpose. The lucid response is choosing your words yourself, not resisting every attempt to change them.',
    fieldPrompt:
      'Today, listen for one moment when someone rephrases what you said in their own terms, or uses a word you\'ve noticed spreading. Ask yourself what that word makes easier to think, and what it makes harder to think.',
    examples: [
      { context: 'work', scene: "In meetings, leadership stops saying \"layoffs\" and starts saying \"right-sizing.\" Within a month you hear yourself say it too, and you notice that \"right-sizing\" makes it harder to think about the people who lost their jobs." },
      { context: 'relationships', scene: "You tell a friend you're \"tired of your job,\" and they reply, \"So you're burned out.\" They repeat it all evening. By the end you've stopped saying \"tired\" and you're wondering whether something is wrong with you, a much bigger frame than the one you came in with." },
      { context: 'solitude', scene: "Scrolling one evening, you realize that three phrases you've used all week came from the same podcast. Each one carries the host's view of how the world works, and you never decided to take it on." },
      { context: 'solitude', scene: "This app is doing it to you right now. LexoLume hands you a word each day so that you start noticing the world through it. That is lexoduction in plain sight, and the honest response is to notice it and decide, word by word, which ones you keep." },
    ],
    nearMiss: {
      scene: "A colleague explains why your team's word \"bug\" is covering two different problems and suggests a separate term for one of them. You adopt it after thinking it through.",
      whyNot: "The colleague is still steering your words, so there is lexoduction in the suggestion. What makes this a near miss is the outcome: you saw the steering, weighed it, and chose the word yourself. The lens did its job.",
    },
    tags: ['language', 'influence', 'manipulation', 'discernment'],
  },
  {
    id: 'culpaduction',
    word: 'Culpaduction',
    pronunciation: 'kul-puh-DUK-shun',
    originType: 'coined',
    etymologyOrRoots:
      'Coined. Latin culpa (guilt, fault) + dūcere (to lead). A sibling of lexoduction.',
    definition:
      'The use of guilt by a person or group to lead another person or group into adopting their beliefs and/or behaviors. In its collective form, a whole group is made to carry guilt so that its members adopt the beliefs and/or behaviors of the one doing the culpaduction. In its selective form, one person\'s guilt is singled out and amplified while others\' is left aside.',
    perceptualLens:
      'You start to notice when guilt arrives attached to a request: the moment a feeling of fault comes bundled with a belief you are expected to take on or a behavior you are expected to change. You begin to see the guilt and the request as two separate things.',
    shadowState:
      'Its absence is unexamined guilt: carrying beliefs or habits you took on to quiet a feeling of fault, without ever checking where the feeling came from or whether the belief holds up. Its counterfeit is reflexive dismissal, treating every feeling of guilt as manipulation so that nothing can ever ask anything of you.',
    shadowNuanceNote:
      'Culpaduction names a method, not a verdict. It can be used by someone you agree with or someone you don\'t, for a cause you share or one you oppose, and the guilt involved may be partly deserved. None of that changes what it is. The lucid response is to separate the two parts: look at the guilt on its own terms, then look at the belief or behavior on its own terms, and decide about each one separately.',
    fieldPrompt:
      'The next time you feel guilty today, ask, "Is this guilt asking me to believe or do something specific? Who asked?" Then consider that belief or behavior as if the guilt weren\'t there.',
    examples: [
      { context: 'relationships', scene: "Whenever you disagree with your mother about how to raise your kids, she mentions everything she sacrificed for you. You notice that the guilt shows up exactly when the disagreement does, and that it is being used to move you toward her view of parenting. That is selective culpaduction." },
      { context: 'work', scene: "At an all-hands meeting, leadership says that everyone who left on time last quarter \"let the team down.\" The guilt lands on the whole room at once, and the behavior it is meant to produce is clear: stay late. That is collective culpaduction." },
      { context: 'solitude', scene: "An ad shows a sad animal, then tells you that every day you don't donate, more will suffer. You feel the guilt and, separately, notice the belief it is pointing you toward. You might still donate, but now you are deciding rather than being led." },
    ],
    nearMiss: {
      scene: "A friend tells you that something you said last week hurt them, and asks you not to say it again.",
      whyNot: "The guilt you feel comes from your own action and points back at it. Nothing larger is being asked of you: no new belief and no unrelated behavior. It becomes culpaduction when guilt is used as a lever to move you somewhere beyond the act itself.",
    },
    tags: ['guilt', 'influence', 'manipulation', 'discernment'],
  },
  {
    id: 'chronolumosity',
    word: 'Chronolumosity',
    pronunciation: 'kron-oh-loo-MOS-ih-tee',
    originType: 'coined',
    etymologyOrRoots:
      'Coined. Greek khrónos (time) + Latin lūmen (light) + -osity (a state or quality).',
    definition:
      'The clarity that comes in the present from an accurate understanding of the past. It faces forward: it uses the past to see now, not to long for or regret it.',
    perceptualLens:
      'You notice the moments when understanding where something came from makes the present make sense: an old pattern repeating, a habit with an origin, a reaction that is older than the situation.',
    shadowState:
      'Chronofog: the past is either blurred or rewritten. It shows up as nostalgia that edits out the hard parts, regret that replays without learning, or a story about yourself that stopped being true years ago.',
    shadowNuanceNote:
      'Rumination can feel like reflection. The test is direction: chronolumosity leaves you clearer about what to do now. Rumination loops back to the same scene and leaves you heavier.',
    fieldPrompt:
      'Pick one reaction you have today that feels bigger than the moment. Ask, "When did I first learn to react this way?" Then look at the present situation again with that answer in mind.',
    examples: [
      { context: 'relationships', scene: "Your partner leaves a dish in the sink and you feel a flash of anger that's far too big. You remember a childhood kitchen where mess meant chaos. The anger shrinks to its real size, and you can just ask them to rinse it." },
      { context: 'work', scene: "A new manager's quick feedback makes you defensive. You recall that a past boss used feedback as a weapon, and you see that this one doesn't. You start hearing the feedback as information." },
      { context: 'body', scene: "You notice you hold your breath whenever your phone buzzes. Looking back, you trace it to a year when every message brought bad news. Knowing that, you breathe out the next time it buzzes." },
    ],
    nearMiss: {
      scene: "You spend an evening replaying an old argument, perfecting what you should have said.",
      whyNot: "This looks backward and stays there. Chronolumosity uses the past to see the present more clearly. Replaying a scene only makes the present heavier.",
    },
    tags: ['time', 'memory', 'clarity'],
  },
  {
    id: 'plerostasis',
    word: 'Plerostasis',
    pronunciation: 'PLEER-oh-STAY-sis',
    originType: 'coined',
    etymologyOrRoots:
      'Coined. Greek plḗrēs (full, complete) + stásis (standing, a steady state).',
    definition:
      'Present sufficiency with zero pull and zero push: realizing, in one lucid moment, that right here and right now you have everything you need. There is no urge to pull anything toward you and no urge to push anything away.',
    perceptualLens:
      'You notice the small, constant reaching that usually runs underneath a moment: checking the phone, planning the next thing, bracing against a sound. You also notice the moments when that reaching stops on its own and the present is simply enough.',
    shadowState:
      'Its absence is chronic reaching: the sense that the moment would be fine if only one more thing were added or removed. Its counterfeits look calm from the outside: numbness, burnout flatlining, and avoidance.',
    shadowNuanceNote:
      'Plerostasis is awake. Senses are sharp, feelings are available, and you could act at once if something called for it. Numbness is dim: you stop wanting because wanting got too painful or too tiring. If the stillness has an edge of "I don\'t care" or "I can\'t," it is shutdown rather than sufficiency, and that is worth noticing kindly instead of calling it peace.',
    fieldPrompt:
      'Three times today, pause for one breath and ask, "Am I pulling, pushing, or neither?" If neither, check that you are alert rather than flat: can you feel your hands, hear the room, and name one thing you see?',
    examples: [
      { context: 'solitude', scene: "Waiting for a kettle to boil, you notice that you aren't reaching for your phone or planning the next thing. The light on the counter, the sound of the water, your feet on the floor: it's all enough. You're fully awake and want nothing added." },
      { context: 'relationships', scene: "Sitting with an old friend, neither of you is talking, and you don't feel any urge to fill the silence or to leave. You're both simply there, alert and at ease." },
      { context: 'body', scene: "Halfway up a hill on a walk, the reaching stops: no thinking about the top, no wishing the hill were shorter. Breath, legs, wind. If someone called your name you'd turn at once, and nothing is missing." },
    ],
    nearMiss: {
      scene: "At the end of a brutal week you lie on the couch scrolling without seeing anything. You don't want anything, and you couldn't make yourself want anything if you tried.",
      whyNot: "There's no pull and no push, but you aren't awake. This is depletion. Plerostasis feels clear and alive, and you could act if needed. This feels dim and unable.",
    },
    tags: ['presence', 'contentment', 'stillness', 'anchor'],
  },
  {
    id: 'respirance',
    word: 'Respirance',
    pronunciation: 'reh-SPY-rence',
    originType: 'coined',
    etymologyOrRoots:
      'Coined. Latin respīrāre (to breathe again; also to recover, to find relief) + -ance (a state or quality, as in radiance).',
    definition:
      'The settled calm that arrives as a result of stopping all activity and breathing on purpose. The breathing is the act; respirance is the state it leaves behind.',
    perceptualLens:
      'You notice that calm can be produced, not just waited for. You start to feel the specific shift a few deliberate breaths make: the shoulders lowering, the gaze softening, the next thing losing its urgency. You also notice how rarely you stop long enough to let it happen.',
    shadowState:
      'Its absence is running on momentum all day, going from task to task without a single full stop. Its counterfeits are breathing used as a technique to push feelings down, and calm that slides into drowsy collapse.',
    shadowNuanceNote:
      'Respirance is settled and alert at the same time. The body softens while the mind stays clear, and you could get up and act at once. If deliberate breathing leaves you foggy, sleepy, or further away from what you feel, it has become an escape rather than a return.',
    fieldPrompt:
      'Once today, stop everything for six slow breaths: hands still, eyes resting, no phone. Afterward, before you move, notice what changed and name the state in one word of your own.',
    examples: [
      { context: 'work', scene: "Before opening a difficult email, you take your hands off the keyboard and breathe out slowly six times. When you look back at the screen, the email is the same, but the tightness in your chest is gone and you read it at normal speed." },
      { context: 'body', scene: "After a long drive you sit in the parked car with the engine off for a minute and just breathe. Your grip on the steering wheel loosens, your jaw unlocks, and when you step out you're fully present for the people waiting inside." },
      { context: 'relationships', scene: "Mid-argument, you say, \"Give me one minute,\" and step outside to breathe. You come back with the same point to make, but you can now hear theirs as well." },
    ],
    nearMiss: {
      scene: "You lie down to do a breathing exercise, drift off, and wake an hour later groggy and heavier than before.",
      whyNot: "That calm dissolved into sleep. Respirance is a clear, awake settledness that you carry back into what you were doing.",
    },
    tags: ['breath', 'calm', 'body', 'practice'],
  },
  {
    id: "gratiance",
    word: "Gratiance",
    pronunciation: "GRAY-shee-ence",
    originType: "coined",
    etymologyOrRoots: "Coined. Latin grātia (thanks, grace, favor) + -ance (a state or quality, as in radiance).",
    definition: "A receptive state of mind in which small occasions for gratitude light up all around you, one after another: a butterfly passing, the sound of waves, the smell of a flower. Gratitude is the response; gratiance is the state that makes those responses keep arriving.",
    perceptualLens: "You start to notice how many small gifts are present in an ordinary moment once you are open to them, and how one noticed gratitude makes the next one easier to see.",
    shadowState: "Its absence has its own word, agratiance: taking everything for granted, so that the gifts are all around you and none of them register. Its counterfeit is prescribed gratitude, listing 'things I'm grateful for' out of obligation, or telling someone in pain that they should be grateful.",
    shadowNuanceNote: "Gratiance arrives through attention, not obligation. It can sit alongside grief, stress, or difficulty without denying them. If gratitude is being used to talk yourself or someone else out of a real feeling, it has stopped being gratiance and become a cover.",
    fieldPrompt: "Today, stop for one slow breath outdoors or by a window and let your senses open. Notice the first small thing you feel thankful for, then see whether a second one follows on its own.",
    examples: [
      { context: 'solitude', scene: "Walking to your car, you take one deep breath and suddenly notice the cool air, a bird calling, the light on a neighbor's tree. Each one brings a small rush of thanks, and they keep coming for the rest of the walk." },
      { context: 'body', scene: "Standing in a warm shower after a cold day, you feel the water on your shoulders and are simply grateful for hot water, for a body that can feel it, for the quiet. The gratitude spreads into the rest of the evening." },
      { context: 'relationships', scene: "At a noisy family dinner you catch your child laughing at something your father said. For a moment you see the whole table as a gift: these voices, this food, this ordinary night." },
    ],
    nearMiss: {
      scene: "Every night you write three things you're grateful for in a journal, quickly and dutifully, without feeling anything.",
      whyNot: "The practice can open the door, but the list itself isn't the state. Gratiance is when the gratitudes start appearing on their own because you're open to them.",
    },
    tags: ["gratitude", "attention", "appreciation", "presence"],
  },
  {
    id: "agratiance",
    word: "Agratiance",
    pronunciation: "ay-GRAY-shee-ence",
    originType: "coined",
    etymologyOrRoots: "Coined. Greek a- (without) + gratiance, from Latin grātia (thanks, grace) + -ance (a state). The shadow of gratiance.",
    definition: "A state of numbness to gratitude, as if a dark cloth were over your eyes: the small gifts are all around you, and none of them reach you. It is not ingratitude, a refusal to give thanks, but an inability to see what there is to be thankful for.",
    perceptualLens: "You start to notice the stretches of the day when nothing registers as a gift: the sun is out, the coffee is good, someone is kind, and it all passes through without landing. Naming it is often the first loosening of the cloth.",
    shadowState: "Agratiance is itself the shadow of Gratiance. It disguises itself as realism or simply being busy, and because nothing hurts, it can last for years unnoticed. It is often deepened by hurry, screens, and constant comparison.",
    shadowNuanceNote: "Agratiance isn't a moral failing, and you can't scold yourself out of it. It often comes with exhaustion, grief, or depression, which deserve care rather than a gratitude list. The cloth usually lifts through slowing down and paying attention, not through trying harder to feel thankful.",
    fieldPrompt: "Once today, when a pleasant moment passes without touching you, notice it: \"Agratiance.\" Then stop for three slow breaths and look at the same moment again.",
    examples: [
      { context: 'solitude', scene: "You drive the coast road to work every day. One morning a passenger gasps at the view, and you realize you haven't actually seen the ocean in months." },
      { context: 'relationships', scene: "Your partner has made you coffee every morning for years. Today they're away, and only when the kitchen is quiet do you realize you stopped noticing the gift long ago." },
      { context: 'body', scene: "On a beautiful spring afternoon you walk past blooming trees while scrolling through email. Later you couldn't say whether the trees were there at all." },
    ],
    nearMiss: {
      scene: "In the weeks after a parent's death, nothing feels like a gift and you can't find gratitude for anything.",
      whyNot: "That flatness is grief, and it deserves to be felt rather than corrected. Agratiance is the unnoticed, everyday numbness of an ordinary life rushing past, not the heaviness of loss.",
    },
    tags: ["gratitude", "numbness", "attention", "shadow"],
  },
  {
    id: "retrogratiance",
    word: "Retrogratiance",
    pronunciation: "ret-roh-GRAY-shee-ence",
    originType: "coined",
    etymologyOrRoots: "Coined. Latin retrō (backward) + gratiance (Latin grātia, thanks, + -ance, a state). Related ideas: felix culpa ('happy fault'), amor fati ('love of fate').",
    definition: "Gratitude, felt in the present, for past difficulties and painful experiences, arising from the realization that what seemed only hard at the time actually led to growth and better conditions in your life.",
    perceptualLens: "You start to see the threads that run from old hardships to present strengths: the failure that redirected you, the loss that taught you what mattered, the struggle that built a capacity you now rely on.",
    shadowState: "Its absence is carrying past pain only as damage, a list of what was taken, with no sight of what grew from it. Its counterfeit is 'everything happens for a reason,' gratitude forced onto pain too early, often to rush yourself or someone else past it.",
    shadowNuanceNote: "Retrogratiance is gratitude for the growth, not for the harm. You can be thankful for who you became without being thankful that something hurt you, and without excusing whoever caused it. It can't be forced or hurried; it tends to arrive on its own once enough time and clarity have passed. Some pain may never turn into it, and that is not a failure.",
    fieldPrompt: "Think of one strength you rely on today. Trace it back and ask, \"What hard thing taught me this?\" Notice whether any gratitude appears, and don't push it if it doesn't.",
    examples: [
      { context: 'work', scene: "Ten years ago you were laid off and spent a frightening year scrambling. Today, running the business you started in that year, you feel thankful for the layoff that you once thought had ruined you." },
      { context: 'relationships', scene: "A painful divorce forced you to learn how to be alone and how to ask for what you need. In your current, happier relationship you catch yourself feeling grateful for what that hard season taught you." },
      { context: 'body', scene: "A serious injury years ago made you slow down and learn to listen to your body. Now, healthier than ever, you feel a quiet thanks for the months you spent on crutches." },
    ],
    nearMiss: {
      scene: "A week after a friend's bad breakup you tell them, \"You'll be grateful for this someday.\"",
      whyNot: "That pushes gratitude onto pain that is still raw. Retrogratiance can only be found by the person who lived it, looking back once the growth is real.",
    },
    tags: ["gratitude", "growth", "time", "resilience"],
  },
  {
    id: "pathosthenia",
    word: "Pathosthenia",
    pronunciation: "path-oh-STHEE-nee-uh",
    originType: "coined",
    etymologyOrRoots: "Coined. Greek páthos (suffering, experience) + sthénos (strength). Echoes Aeschylus's pathei mathos, 'learning through suffering.'",
    definition: "Strength or ability that was born and grown through suffering: a capacity you carry now that exists because of something hard you went through. Unlike most states, it is something you keep.",
    perceptualLens: "You start to recognize which of your strengths have roots in hardship: the patience that came from a long illness, the calm in a crisis that came from a chaotic childhood, the compassion that came from your own loss. You also begin to see it in others, in the quiet competence of people who have been through something.",
    shadowState: "Its absence is suffering that only left damage, or strength you have but don't recognize as yours. Its counterfeit has its own word, apathosthenia. It is hardness: armor that looks like strength from outside, keeping you safe by keeping you closed.",
    shadowNuanceNote: "Pathosthenia is strength grown from suffering, not an argument for suffering. Nobody needs to seek pain or be grateful for being harmed in order to have it. The test that separates it from hardness: real pathosthenia leaves you more open and more capable of care, while armor leaves you less reachable.",
    fieldPrompt: "Name one thing you can handle now that you couldn't once. Ask, \"Where did this come from?\" If the answer is something hard, notice that the strength is yours to keep.",
    examples: [
      { context: 'relationships', scene: "A friend calls in a panic after a frightening diagnosis. You know exactly what to say and what not to say, because you went through the same thing five years ago. Your steadiness is their lifeline." },
      { context: 'work', scene: "When the company hits a crisis, you're the calmest person in the room. You realize the calm was built in a childhood where chaos was normal and someone had to keep their head." },
      { context: 'body', scene: "After years of rehabilitation from an accident, you have a patience with your body and with slow progress that your athletic friends don't. When they get injured, they come to you." },
    ],
    nearMiss: {
      scene: "After a betrayal you decide never to trust anyone again, and you call it being strong.",
      whyNot: "That is armor, not strength. It protects by closing you off. Pathosthenia leaves you more capable of connection, not less.",
    },
    tags: ["strength", "suffering", "growth", "resilience"],
  },
  {
    id: "apathosthenia",
    word: "Apathosthenia",
    pronunciation: "ay-path-oh-STHEE-nee-uh",
    originType: "coined",
    etymologyOrRoots: "Coined. Greek a- (without) + páthos (suffering, feeling) + sthénos (strength). The shadow of pathosthenia; note the apathy (a-pathos) hidden inside it.",
    definition: "A false strength built by shutting off from caring about outcomes. Instead of dealing with reality, the person separates from it to reduce difficult interactions, and mistakes that separation for strength when it is really a refusal to confront what needs confronting.",
    perceptualLens: "You start to notice when \"I don't care\" or \"it doesn't bother me\" is doing the work that facing something should be doing. You see the calm that comes from pulling away rather than from going through.",
    shadowState: "Apathosthenia is itself the shadow of Pathosthenia: strength that skipped the suffering by leaving the room. From outside it can look like toughness, composure, or being 'unbothered,' which is why it is so often admired and so rarely named.",
    shadowNuanceNote: "Letting go of what you truly can't control is healthy, and it is part of Ataraxia and Liberance. The test is contact: are you still in touch with reality and acting where you can? Healthy letting go comes after engagement. Apathosthenia replaces engagement, so the problem is still there, just no longer looked at.",
    fieldPrompt: "Notice one thing today you've told yourself you 'don't care' about. Ask, \"If I let myself care for a minute, what would I have to face?\" Just look; you don't have to act yet.",
    examples: [
      { context: 'relationships', scene: "Your marriage has been distant for a year. You tell friends you're fine and that you've \"stopped needing much from it.\" One night you realize you haven't become stronger; you've stopped showing up to a conversation that needs to happen." },
      { context: 'work', scene: "After being passed over twice, you decide you just don't care about your career anymore and call it being above office politics. Underneath, you've stopped asking for what you want because asking hurt." },
      { context: 'body', scene: "Your doctor flagged a health issue months ago. You've told yourself you're 'not a worrier' and haven't booked the follow-up. The calm you feel is the calm of not looking." },
    ],
    nearMiss: {
      scene: "After years of trying to fix a sibling's addiction, you set a boundary, stop rescuing them, and still tell them you love them.",
      whyNot: "You engaged fully, faced the pain, and then let go of what wasn't yours to control, while staying in contact. That is wisdom and care. Apathosthenia would be cutting off the feeling so you never had to face it.",
    },
    tags: ["false strength", "avoidance", "detachment", "shadow"],
  },
  {
    id: "authentophilia",
    word: "Authentophilia",
    pronunciation: "aw-THEN-toh-FIL-ee-uh",
    originType: "coined",
    etymologyOrRoots: "Coined. Greek authéntēs (one who acts on their own authority, the root of 'authentic') + philía (love). Paired with authentophobia.",
    definition: "An inner love of developing, understanding, and expressing your authentic self: the desire to know who you actually are and to live it outwardly.",
    perceptualLens: "You start to notice the pull toward your own truth: the opinion you want to voice, the interest you want to follow, the way of living that fits you even when it doesn't fit expectations. You also notice which people and places make that pull stronger.",
    shadowState: "Its absence, and its opposite, is Authentophobia: the fear of becoming yourself, which shows up as the desire to become what others want you to be. Its counterfeit is self-absorption, or \"I'm just being me\" used to excuse carelessness toward others.",
    shadowNuanceNote: "Authentophilia isn't fixed or self-centered. The authentic self keeps developing, and it still listens, learns, and cares about other people. If \"being authentic\" has become a reason never to change or never to consider anyone else, it has stopped being curiosity about the self and turned into defending a self-image.",
    fieldPrompt: "Once today, notice a moment when you're about to say or do what's expected. Ask, \"What would I say here if I were being fully myself?\" You don't have to act on it; just hear the answer.",
    examples: [
      { context: 'work', scene: "In a meeting you feel the familiar urge to agree with the room. Instead you hear yourself say, \"Actually, I see it differently,\" and you feel a quiet rightness, as if you'd stepped back into your own shoes." },
      { context: 'solitude', scene: "At forty-five you sign up for the painting class you've wanted to take since you were a child. Walking in, you're nervous and more alive than you've felt in years." },
      { context: 'relationships', scene: "For the first time you tell your parents that you're not going to follow the career they planned for you. Your voice shakes, and something inside you settles." },
    ],
    nearMiss: {
      scene: "You interrupt everyone at dinner and dismiss their objections with, \"Sorry, I'm just an honest person.\"",
      whyNot: "That uses authenticity as a shield. Authentophilia is a love of discovering and expressing yourself, which includes caring how you affect others.",
    },
    tags: ["authenticity", "self", "growth", "courage"],
  },
  {
    id: "authentophobia",
    word: "Authentophobia",
    pronunciation: "aw-THEN-toh-FOH-bee-uh",
    originType: "coined",
    etymologyOrRoots: "Coined. Greek authéntēs (one who acts on their own authority, the root of 'authentic') + phóbos (fear). The shadow of authentophilia.",
    definition: "An inner fear of developing, understanding, and expressing your authentic self, which shows up as the desire to become what others want you to be.",
    perceptualLens: "You start to notice the moments when you reshape yourself to fit what others want: the opinion you swallow, the interest you hide, the version of you that appears for each audience. You begin to feel the fear underneath, and what it is protecting you from.",
    shadowState: "Authentophobia is itself the shadow of Authentophilia. It often disguises itself as being easygoing, adaptable, or 'not making a fuss,' and it is often rewarded by others, which makes it hard to see.",
    shadowNuanceNote: "Adapting to others isn't always authentophobia. Compromising in a relationship or adjusting your manner to a setting can come from care and wisdom. The test is direction: are you bending toward someone, or away from yourself? Authentophobia also deserves compassion; it usually began as a way to stay safe or loved.",
    fieldPrompt: "Today, notice one moment when you change what you say or do to match what you think someone wants. Ask, \"What am I afraid would happen if I didn't?\"",
    examples: [
      { context: 'relationships', scene: "With each new partner you've become someone slightly different: a hiker with one, a homebody with another. One night you realize you don't know what you actually enjoy." },
      { context: 'work', scene: "You've hidden your real ideas in meetings for years, offering only what the boss is likely to approve. You tell yourself it's strategy, and underneath it is the fear of being seen as you are." },
      { context: 'solitude', scene: "Picking out clothes for a reunion, you choose the outfit you think people expect of you rather than one you like. You notice a small, familiar sadness as you do it." },
    ],
    nearMiss: {
      scene: "You wear a suit to a funeral even though you prefer casual clothes.",
      whyNot: "That is respect for an occasion, chosen freely. Authentophobia is a deeper pattern of shaping who you are out of fear of being yourself.",
    },
    tags: ["authenticity", "fear", "conformity", "shadow"],
  },
  {
    id: "haplophilia",
    word: "Haplophilia",
    pronunciation: "HAP-loh-FIL-ee-uh",
    originType: "coined",
    etymologyOrRoots: "Coined. Greek haplóos (simple, single, unfolded) + philía (love). Related: apheleia, the Greek word for simplicity as a quality.",
    definition: "The inner love of and desire for a simpler life: fewer things, fewer obligations, fewer layers between you and what matters.",
    perceptualLens: "You start to notice the weight of complication: the drawer you avoid, the subscriptions you forgot, the commitments that crowd out what you care about. You also notice the lightness that comes each time something unnecessary is set down.",
    shadowState: "Its absence is accumulation without noticing, a life that keeps adding and never subtracts until it is crowded with things and obligations no one chose. Its opposite is Pleonexia, the urge for more. Its counterfeit is aesthetic minimalism: buying the look of simplicity while the life underneath stays just as cluttered.",
    shadowNuanceNote: "Haplophilia is a movement toward what matters, not away from responsibility. 'Simplifying' by abandoning commitments or people you care about is escape, not simplicity. The test is whether letting go of something makes more room for what you value, or simply removes what is hard.",
    fieldPrompt: "Today, notice one thing in your life, an object, a habit, or an obligation, that adds weight but no value. Picture your day without it and notice what you feel.",
    examples: [
      { context: 'solitude', scene: "Moving house, you open a box you packed three moves ago and never opened. Giving it away unopened feels lighter than anything you've bought in years." },
      { context: 'work', scene: "Looking at your calendar, you feel a strong pull to cancel half of your recurring meetings. You keep the three that matter and feel your week open up." },
      { context: 'relationships', scene: "Planning the holidays, you realize you want one quiet dinner with the people you love rather than five events you dread. Saying so out loud feels like relief." },
    ],
    nearMiss: {
      scene: "Overwhelmed, you quit your job, leave your town, and stop answering friends' calls, telling yourself you're simplifying.",
      whyNot: "That removes everything hard, including what you value. Haplophilia clears away the unnecessary to make more room for what matters.",
    },
    tags: ["simplicity", "clarity", "letting go"],
  },
  {
    id: 'liberance',
    word: 'Liberance',
    pronunciation: 'LIB-er-ence',
    originType: 'coined',
    etymologyOrRoots:
      'Coined. Latin līber (free) + -ance (a state or quality, as in radiance).',
    definition:
      'The sudden freedom and relief of realizing that, while you can\'t control everything that happens to you, you can choose your response to it, if you take the option.',
    perceptualLens:
      'You start to notice the small gap between what happens and what you do next, and that the gap is yours. Situations you used to experience as things done to you begin to show a second part: the response, which is still open.',
    shadowState:
      'Emotional hunger: the belief that your inner state is set entirely by what other people and circumstances do, so you are always waiting to be fed by them. You need the apology, the approval, the change in someone else\'s behavior before you can feel all right, and the hunger never quite ends because the food is never yours to give.',
    shadowNuanceNote:
      'Liberance is not "it\'s all your choice," and it isn\'t a rule against feeling. You still feel the hurt, the anger, or the disappointment fully. The freedom is in choosing what to do after you have felt it. If the idea turns into blaming yourself for being affected, or pretending you weren\'t, it has become another kind of control and the relief disappears.',
    fieldPrompt:
      'The next time someone or something upsets you today, let yourself feel it, then ask, "What do I want my response to be?" Notice the moment you realize the answer is yours to decide.',
    examples: [
      { context: 'relationships', scene: "For years you've waited for your brother to apologize for something he said at your wedding. One afternoon it lands that you can stop waiting: you can decide how you'll be with him whether or not he ever apologizes. The relief is immediate, like setting down a bag you forgot you were carrying." },
      { context: 'work', scene: "Your manager's moods have set the tone of your week for months. Driving home after a bad meeting, you realize that her mood is hers and your evening is yours. You walk in the door lighter, the meeting still unchanged." },
      { context: 'body', scene: "Stuck at a gate after a cancelled flight, you feel the anger rise and let it. Then it hits you that the delay is fixed but the next three hours are not. Your chest loosens and you go find a decent meal and a book." },
    ],
    nearMiss: {
      scene: "After a painful breakup you tell yourself, \"I choose not to let this affect me,\" and refuse to feel anything about it.",
      whyNot: "That uses choice to skip the feeling, which only moves the hunger underground. Liberance comes after the feeling is allowed, and the relief is real rather than performed.",
    },
    tags: ['freedom', 'choice', 'stoic', 'response'],
  },
  {
    id: 'kairos',
    word: 'Kairos',
    pronunciation: 'KY-ross',
    originType: 'existing',
    etymologyOrRoots:
      'Ancient Greek kairós: the right or opportune moment, as distinct from khrónos, clock time.',
    definition:
      'The opportune moment: the brief window in which an action, a word, or a decision fits and will land.',
    perceptualLens:
      'Time stops feeling evenly spread. You notice openings, such as the pause after someone finishes a thought or the moment a room becomes receptive, and you notice when they close.',
    shadowState:
      'Missing it means acting on the clock instead of the situation: saying the right thing at the wrong time, or waiting for a perfect moment that never announces itself. The faked version is forcing urgency and calling it timing.',
    fieldPrompt:
      'In one conversation today, hold back something you want to say until you sense the opening for it. Notice what the opening felt like when it came.',
    examples: [
      { context: 'relationships', scene: "A friend has been circling something hard all evening. As the two of you walk to the car, there's a pause where they look over at you. You ask, \"What's really going on?\" and they tell you. Ten minutes earlier the question would have bounced off." },
      { context: 'work', scene: "In a tense meeting, the energy finally drops after the main disagreement has been aired. That's when you offer your compromise idea, and it lands. Raised at the start, it would have been taken as picking sides." },
      { context: 'solitude', scene: "You've meant to call your father for weeks. One afternoon you have a free hour, you feel warm toward him, and you know he's home. You call that day instead of waiting for the perfect week." },
    ],
    nearMiss: {
      scene: "You hold back an apology for days, waiting for the \"right moment,\" and the moment never comes.",
      whyNot: "That's waiting for a guarantee, not reading the situation. Kairos means noticing a real opening and acting in it, even when it isn't perfect.",
    },
    tags: ['time', 'action', 'timing'],
  },
  {
    id: 'arete',
    word: 'Arete',
    pronunciation: 'AR-eh-tay',
    originType: 'existing',
    etymologyOrRoots:
      'Ancient Greek aretḗ: excellence, the full realization of a thing\'s purpose or nature.',
    definition:
      'Excellence of character or function: being fully and skillfully what you are, in the task in front of you.',
    perceptualLens:
      'You start seeing the difference between doing something and doing it well. You notice craft in small things, such as how a barista moves or how a sentence is built, and the moments where your own care slips.',
    shadowState:
      'Its absence is going through the motions, adequate and unowned. Its counterfeit is perfectionism, which polishes the appearance of excellence while avoiding the risk of real effort.',
    fieldPrompt:
      'Choose one ordinary task today, like washing a cup or writing an email, and do it as well as it can be done. Notice what "well" actually means for that task.',
    examples: [
      { context: 'work', scene: "A carpenter fitting a drawer sands it three more times after it already closes. It now slides shut on its own weight. Nobody will notice, but the drawer is fully what a drawer should be." },
      { context: 'relationships', scene: "Your friend is at their best as a listener: phone away, questions that follow your thread, no pivot to their own story. For that hour, they are excellent at being a friend." },
      { context: 'body', scene: "A runner on the last mile keeps their form instead of collapsing into a shuffle. They aren't fast, but they're running as well as they can right now." },
    ],
    nearMiss: {
      scene: "You spend three hours rewording an email that only needed to say yes.",
      whyNot: "That is perfectionism. Arete is doing the task as well as the task actually requires. Polishing beyond the point of use is often a way of avoiding the next task.",
    },
    tags: ['excellence', 'character', 'craft'],
  },
  {
    id: 'kenosis',
    word: 'Kenosis',
    pronunciation: 'kih-NOH-sis',
    originType: 'existing',
    etymologyOrRoots:
      'Ancient Greek kénōsis: emptying, from kenós (empty). Used in early Christian theology for self-emptying.',
    definition:
      'Self-emptying: deliberately setting down your own agenda, certainty, or self-image to make room for something or someone else.',
    perceptualLens:
      'You notice how full you arrive at things: full of opinions before the meeting starts, full of your reply before the other person finishes. You also notice what becomes visible when you set some of that down.',
    shadowState:
      'Its absence is a mind with no room left, where everything new gets filed under what you already think. Its counterfeit is self-erasure: disappearing to keep the peace and calling it humility.',
    shadowNuanceNote:
      'Emptying is chosen and temporary. You set the self down and can pick it back up. If "letting go" means you no longer know what you want or can\'t say no, it has become self-abandonment.',
    fieldPrompt:
      'In one conversation today, set down your planned reply and listen until the other person is completely finished. Notice what you heard that you would otherwise have missed.',
    examples: [
      { context: 'relationships', scene: "Your teenager starts to explain why they quit the team. You feel your lecture forming. You set it down, say \"Tell me more,\" and keep listening. What you hear changes what you would have said." },
      { context: 'work', scene: "In a design review you're sure your approach is right. You decide to argue for the opposite approach for ten minutes, sincerely, and you find the flaw in your own plan." },
      { context: 'solitude', scene: "Visiting a foreign city, you put your guidebook and opinions away for a day and simply walk and watch. With less already filling your head, you notice far more." },
    ],
    nearMiss: {
      scene: "To avoid conflict, you agree to a plan you think is wrong and tell yourself you're \"letting go of ego.\"",
      whyNot: "That's self-erasure. Kenosis sets the self aside by choice to make room, and you can pick it back up. If you can't find your own view afterward, it was abandoned, not emptied.",
    },
    tags: ['humility', 'listening', 'openness'],
  },
  {
    id: 'ataraxia',
    word: 'Ataraxia',
    pronunciation: 'at-uh-RAK-see-uh',
    originType: 'existing',
    etymologyOrRoots:
      'Ancient Greek ataraxía: "un-disturbedness," from a- (not) + tarássein (to stir up). Central to Epicurean and Pyrrhonian thought.',
    definition:
      'Tranquility of mind: a settled steadiness that circumstances can stir without overturning.',
    perceptualLens:
      'You notice the gap between an event and your disturbance about it, and how much of the disturbance comes from your judgments rather than from the event itself.',
    shadowState:
      'Its absence is being churned by every headline, message, and passing worry. Its counterfeits are suppression, which holds the surface still while the water boils underneath, and indifference.',
    shadowNuanceNote:
      'Ataraxia still feels. The disturbance arrives and passes through without taking over. Suppression and indifference only stop the feeling from showing, or stop it from being felt at all.',
    fieldPrompt:
      'The next time something irritates you today, name the event in plain words, then name your judgment about it. Notice which of the two is doing the disturbing.',
    examples: [
      { context: 'work', scene: "An angry client email arrives late on Friday. You feel the jolt, read it twice, and notice the email is one thing and your story about it (\"I'm going to lose this account\") is another. You reply on Monday, settled." },
      { context: 'relationships', scene: "Your sibling makes the same sharp comment at a family dinner that used to ruin your night. It stings, and you feel it, but it passes through you. You stay in the conversation." },
      { context: 'body', scene: "Stuck in a traffic jam, you notice your shoulders creeping up. You let them drop. You're still late, but you're no longer at war with the road." },
    ],
    nearMiss: {
      scene: "Bad news arrives and you feel nothing. You tell everyone you're fine, and two days later you snap at a cashier.",
      whyNot: "That was suppression, not tranquility. Ataraxia lets a disturbance be felt and pass. Suppression stores it for later.",
    },
    tags: ['tranquility', 'stoic', 'emotion'],
  },
  {
    id: 'prosoche',
    word: 'Prosoche',
    pronunciation: 'pro-so-KAY',
    originType: 'existing',
    etymologyOrRoots:
      'Ancient Greek prosokhḗ: attention, from prosékhein (to turn the mind toward). The core Stoic practice of continuous self-attention.',
    definition:
      'Attentiveness: a steady, deliberate watchfulness over your own mind and actions, moment to moment.',
    perceptualLens:
      'You notice where your attention actually is, as opposed to where you think it is, and how often it drifts without being asked.',
    shadowState:
      'Its absence is autopilot: whole stretches of the day you can\'t account for. Its counterfeit is anxious self-monitoring, watching yourself in order to judge rather than to see.',
    fieldPrompt:
      'Set one cue today, such as every time you open a door, and ask, "Where is my attention right now?" Just notice; don\'t correct.',
    examples: [
      { context: 'work', scene: "Mid-afternoon, you catch yourself on a third browser tab that has nothing to do with your task. You notice it without scolding yourself, and come back." },
      { context: 'relationships', scene: "During dinner, you notice your attention has drifted to tomorrow's to-do list while your partner is still talking. You return to their face and their words." },
      { context: 'body', scene: "Walking up stairs, you feel your jaw is clenched. You hadn't known. You let it go and keep watching for the next time it tightens." },
    ],
    nearMiss: {
      scene: "You monitor yourself all day, critiquing every word you say and every way you sit.",
      whyNot: "That's anxious self-surveillance. Prosoche is calm, curious attention that is there to see, not to judge.",
    },
    tags: ['attention', 'stoic', 'practice'],
  },
  {
    id: 'aporia',
    word: 'Aporia',
    pronunciation: 'uh-POR-ee-uh',
    originType: 'existing',
    etymologyOrRoots:
      'Ancient Greek aporía: "without passage," from a- (without) + póros (a way through). The puzzlement Socrates\' questions produce.',
    definition:
      'A productive impasse: the honest state of not knowing, reached once easy answers have run out.',
    perceptualLens:
      'You notice the moment you reach the edge of what you actually understand, and the urge to cover it with a quick answer.',
    shadowState:
      'Its absence is false certainty, answering before the question has been understood. Its counterfeit is performed confusion, saying "who can really know?" to avoid committing to anything.',
    fieldPrompt:
      'When you notice yourself answering a question quickly today, ask yourself, "Do I know this, or does it just sound familiar?" Stay with the question one beat longer.',
    examples: [
      { context: 'work', scene: "A colleague asks why a process exists. You start to explain and realize you don't actually know. Instead of bluffing, you say so, and the two of you find out it's no longer needed." },
      { context: 'relationships', scene: "Your child asks, \"Why do people die?\" Every quick answer feels hollow. You say, \"I'm not sure, let's think about it,\" and the conversation is one of your best." },
      { context: 'solitude', scene: "You've told yourself for years you know what you want from your career. Writing in a journal, you find you can't actually say it. The not-knowing is uncomfortable, and it's the first honest step." },
    ],
    nearMiss: {
      scene: "Asked for your view on something difficult, you say, \"Well, who can really know anything?\" and change the subject.",
      whyNot: "That uses uncertainty as an exit. Aporia is reached by thinking hard until easy answers run out, and then staying with the question.",
    },
    tags: ['inquiry', 'not-knowing', 'socratic'],
  },
  {
    id: 'metanoia',
    word: 'Metanoia',
    pronunciation: 'met-uh-NOY-uh',
    originType: 'existing',
    etymologyOrRoots:
      'Ancient Greek metánoia: "change of mind," from metá (after, beyond) + noûs (mind).',
    definition:
      'A genuine change of mind or heart: a turning that changes how you see, not only what you think.',
    perceptualLens:
      'You notice the moments when you could see a situation differently, and the small resistance that keeps you seeing it the old way.',
    shadowState:
      'Its absence is defending a view because it is yours. Its counterfeit is performative change, adopting new words while the old way of seeing stays in place.',
    fieldPrompt:
      'Pick one opinion you hold firmly and, for five minutes, argue the other side to yourself as well as you can. Notice whether anything in you turns, even slightly.',
    examples: [
      { context: 'relationships', scene: "For years you thought your mother was controlling. Caring for your own sick child, you suddenly see her hovering as fear, not control. You feel differently about her from then on." },
      { context: 'work', scene: "You dismissed a junior colleague's idea in a meeting. A week later you see why it works, and you tell them, and the whole team, that you were wrong." },
      { context: 'solitude', scene: "Watching a documentary, you realize your view of an issue was built on a story you never checked. It isn't just a new fact. It changes how you look at a whole set of things." },
    ],
    nearMiss: {
      scene: "After a debate you start using the other side's vocabulary, but you decide everything the same way you did before.",
      whyNot: "The words changed, but the seeing didn't. Metanoia changes how you see, and that shows up in what you do.",
    },
    tags: ['change', 'perspective', 'growth'],
  },
  {
    id: "eudaimonia",
    word: "Eudaimonia",
    pronunciation: "yoo-dy-MOH-nee-uh",
    originType: "existing",
    etymologyOrRoots: "Ancient Greek eudaimonía, from eû (well, good) + daímōn (guiding spirit). Aristotle's word for the highest human good.",
    definition: "Flourishing: a life that is going well as a whole because you are living out your best capacities, in good relationships, doing things that matter. It is deeper and steadier than happiness as a mood.",
    perceptualLens: "You start to tell the difference between moments that feel good and moments that are good for you. You notice which hours of a day leave you more fully yourself and which leave you thinner, even when both were pleasant.",
    shadowState: "Its absence has its own word, tepidaimonia: a life arranged around comfort, approval, or getting through the week, where nothing is wrong but little is alive. Its counterfeit is chasing good feelings and calling it a good life: pleasure stacked on pleasure with no growth underneath.",
    shadowNuanceNote: "Eudaimonia isn't constant cheerfulness. A flourishing life includes grief, effort, and hard seasons. The question is not whether today felt good, but whether you are living as the person you want to be, through good days and bad ones.",
    fieldPrompt: "Tonight, pick one moment from today and ask, \"Did that make me more fully myself, or less?\" Notice whether the answer matches how pleasant the moment was.",
    examples: [
      { context: 'work', scene: "After a long day helping a new colleague learn the ropes, you are tired but quietly satisfied, more than after the easy day when you left early. The tiredness came from using what you're good at for something that matters." },
      { context: 'relationships', scene: "A long dinner with old friends, with some laughter and one hard conversation, leaves you feeling more like yourself than a week of good television did. Nothing about it was effortless, and it was good." },
      { context: 'solitude', scene: "Looking back on a difficult year, you realize you grew more in it than in any easy one before. It didn't feel happy, but it was a year you're glad you lived." },
    ],
    nearMiss: {
      scene: "A weekend of great meals, shopping and binge-watching leaves you feeling pleasantly full and a little empty at the same time.",
      whyNot: "That was pleasure, which is welcome but not the same thing. Eudaimonia comes from living out your capacities and values, and it often feels more like meaning than like comfort.",
    },
    tags: ["flourishing", "anchor", "aristotle", "meaning"],
  },
  {
    id: "tepidaimonia",
    word: "Tepidaimonia",
    pronunciation: "TEP-ih-dy-MOH-nee-uh",
    originType: "coined",
    etymologyOrRoots: "Coined. Latin tepidus (lukewarm) + Greek daímōn (spirit), mirroring eudaimonia. A lukewarm spirit.",
    definition: "The shadow of eudaimonia: a life arranged around comfort, approval, or just getting through the week, where nothing is wrong but little is alive. Not cold and not suffering, just never warm enough to be fully lived.",
    perceptualLens: "You start to notice the lukewarm stretches: weeks that pass without anything you'd miss, choices made because they were easiest or would look fine to others, and the quiet sense that your life is happening at a low setting.",
    shadowState: "Tepidaimonia is itself a shadow state. It is easy to miss because nothing hurts. It often disguises itself as being 'fine,' sensible, or settled, and it can fill the time with pleasant distractions that keep the lukewarmness from being felt.",
    shadowNuanceNote: "A quiet, simple life is not tepidaimonia. Someone who has chosen a small life on purpose and lives it with warmth and attention may be flourishing. The difference is aliveness, not size: tepidaimonia is a life arranged to avoid discomfort, while a simple flourishing life is arranged around what matters.",
    fieldPrompt: "Tonight, ask yourself, \"What did I do today because it mattered, and what did I do because it was easiest or looked fine?\" Notice the proportion without judging it.",
    examples: [
      { context: 'work', scene: "You've been in the same comfortable job for six years. It pays well and nobody complains. When a friend asks what you'd do if money didn't matter, you realize you haven't thought about it in years, and that you aren't sure you want to." },
      { context: 'relationships', scene: "Your evenings with your partner follow the same pattern: dinner, a show, phones, bed. There's no conflict and no closeness. You notice you can't remember the last real conversation." },
      { context: 'solitude', scene: "Looking back at your calendar for the past month, you see that every slot was filled and almost nothing in it was something you chose because you cared. It was a full month and a lukewarm one." },
    ],
    nearMiss: {
      scene: "A retired neighbor spends most days gardening, reading, and walking the same route. Their life looks small and repetitive from the outside.",
      whyNot: "They chose it, they're warmly engaged in it, and they light up talking about their tomatoes. That is a simple life, not a lukewarm one.",
    },
    tags: ["flourishing", "shadow", "comfort", "aliveness"],
  },
  {
    id: "phronesis",
    word: "Phronesis",
    pronunciation: "froh-NEE-sis",
    originType: "existing",
    etymologyOrRoots: "Ancient Greek phrónēsis: practical wisdom, prudence, from phronein (to think, to be minded). Central to Aristotle's ethics.",
    definition: "Practical wisdom: the ability to see what a particular situation calls for and act on it well, here and now, with these people.",
    perceptualLens: "You notice the moments when a rule, a habit, or general advice doesn't quite fit the situation in front of you, and you see what would actually work instead.",
    shadowState: "Its absence is applying rules or scripts mechanically, doing the 'right' thing in the wrong way or at the wrong time. Its counterfeit is cleverness: finding a clever justification for whatever you already wanted to do.",
    fieldPrompt: "Once today, before you follow your usual approach to something, ask, \"What does this particular situation actually need?\" Notice whether the answer differs from your habit.",
    examples: [
      { context: 'relationships', scene: "Your friend is grieving. You know the usual advice is to offer help, but you see that today they need you to sit with them and say nothing useful at all. You do that." },
      { context: 'work', scene: "The policy says to escalate every complaint. You see that this customer just needs ten minutes of being listened to, and that escalating would make it worse. You listen, solve it, and note it for your manager." },
      { context: 'body', scene: "Your training plan says run today, but your body is telling you something isn't right. You take a walk instead, and the next day you run well." },
    ],
    nearMiss: {
      scene: "You skip the gym for the third day running, telling yourself you're 'listening to your body.'",
      whyNot: "That borrows the language of practical wisdom to justify what you already wanted. Phronesis looks honestly at the situation, including at your own excuses.",
    },
    tags: ["wisdom", "judgment", "aristotle", "action"],
  },
  {
    id: "sophrosyne",
    word: "Sophrosyne",
    pronunciation: "soh-FROSS-ih-nee",
    originType: "existing",
    etymologyOrRoots: "Ancient Greek sōphrosýnē: soundness of mind, temperance, from sōs (safe, whole) + phrēn (mind).",
    definition: "Balanced self-command: knowing yourself well enough to take what you need and stop there, in eating, speaking, working, and wanting.",
    perceptualLens: "You start to feel the exact point where 'enough' becomes 'too much': the last bite you didn't need, the comment that went one sentence too far, the hour of work that cost more than it gave.",
    shadowState: "Its absence is excess in one direction or another, such as overeating, overworking, or oversharing, often followed by regret. Its counterfeit is rigid self-denial, which looks like moderation but is control driven by fear.",
    shadowNuanceNote: "Sophrosyne is relaxed, not white-knuckled. It comes from knowing yourself, not from fighting yourself. If moderation feels like constant strain and anxious rule-keeping, it has turned into restriction.",
    fieldPrompt: "Pick one thing you do today that tends to run long, such as eating, scrolling, or talking. Notice the moment it becomes 'enough,' and see what happens if you stop there.",
    examples: [
      { context: 'body', scene: "Halfway through a second slice of cake you notice you're no longer tasting it. You put the fork down without any struggle, satisfied rather than deprived." },
      { context: 'relationships', scene: "In an argument you have one more cutting point ready. You notice you've already made your case, and you let it go. The conversation stays repairable." },
      { context: 'work', scene: "At 6 p.m. you could keep going, but you notice your work has started getting worse. You stop, and you come back the next morning with a clear head." },
    ],
    nearMiss: {
      scene: "You allow yourself exactly 1,200 calories a day and feel anxious and guilty whenever you go over.",
      whyNot: "That is control rather than measure. Sophrosyne grows from self-knowledge and leaves you at ease. Rigid restriction runs on fear and leaves you strained.",
    },
    tags: ["balance", "temperance", "self-knowledge"],
  },
  {
    id: "philia",
    word: "Philia",
    pronunciation: "FIL-ee-uh",
    originType: "existing",
    etymologyOrRoots: "Ancient Greek philía: friendship, affectionate love. Aristotle described its highest form as friendship between people who each want the other's good for its own sake.",
    definition: "Friendship-love: a bond in which two people each want good things for the other, for the other's own sake, and both are better for it.",
    perceptualLens: "You notice which of your relationships rest on mutual goodwill, and which rest mostly on usefulness or pleasure. You also notice the small acts that build it up: remembering, showing up, being honest.",
    shadowState: "Its absence is a social life built on convenience, where people are kept close for what they provide. Its counterfeit is flattery: warmth that tells you what you want to hear instead of wanting your good.",
    fieldPrompt: "Think of one friend today and do one small thing purely for their good, with nothing expected back. Notice how it feels to give that way.",
    examples: [
      { context: 'relationships', scene: "A friend tells you, kindly and directly, that you've been unfair to your sister. It stings, and you know they said it because they want you to be someone you're proud of." },
      { context: 'work', scene: "A colleague you've worked with for years recommends you for a role that will take you off their team. They lose a teammate and they're glad for you anyway." },
      { context: 'solitude', scene: "Scrolling your contacts, you notice who you would call at 2 a.m. in a crisis, and who would call you. The list is short, and each name on it is a treasure." },
    ],
    nearMiss: {
      scene: "You have a group of friends you go out with every weekend. The nights are fun, but no one has ever asked how you're really doing.",
      whyNot: "That is friendship of pleasure, which Aristotle called real but incomplete. Philia in its full form wants your good, not just your company on a fun night.",
    },
    tags: ["friendship", "love", "relationships", "aristotle"],
  },
  {
    id: "mudita",
    word: "Mudita",
    pronunciation: "moo-DEE-tah",
    originType: "existing",
    etymologyOrRoots: "Pali and Sanskrit muditā: joy, gladness. One of the four 'immeasurables' in Buddhist teaching, alongside kindness, compassion and equanimity.",
    definition: "Sympathetic joy: genuine happiness at someone else's good fortune, with no comparison to your own.",
    perceptualLens: "You notice your first reaction when someone else succeeds: the flicker of comparison or the lift of gladness. You start to see how much joy is available in other people's good news.",
    shadowState: "Its absence is envy, or quiet comparison that turns every piece of someone else's good news into a measure of your own lack. Its counterfeit is performed congratulations that hide resentment.",
    fieldPrompt: "The next time someone shares good news today, in person or online, pause before you reply. Notice your first reaction, and see whether you can find real gladness for them.",
    examples: [
      { context: 'relationships', scene: "Your sister tells you she's pregnant, after years of trying. You feel joy rise in your chest before you even think about anything else. It is entirely for her." },
      { context: 'work', scene: "A teammate gets the promotion you also wanted. Under the disappointment you notice something real: you're glad for them, because they worked hard and they'll be good at it." },
      { context: 'solitude', scene: "Watching a stranger on the street propose and get a yes, you find yourself grinning for the rest of the walk home. Their happiness has nothing to do with you, and it's yours too." },
    ],
    nearMiss: {
      scene: "You write \"So happy for you!!\" under a friend's announcement while privately feeling that they don't deserve it.",
      whyNot: "The words are there but the gladness isn't. Mudita is the feeling itself, and the lens is noticing honestly whether it is present.",
    },
    tags: ["joy", "relationships", "buddhist", "envy"],
  },
  {
    id: "wabi-sabi",
    word: "Wabi-sabi",
    pronunciation: "WAH-bee SAH-bee",
    originType: "existing",
    etymologyOrRoots: "Japanese. Wabi: rustic simplicity, quiet austerity. Sabi: the beauty that comes with age and wear. Rooted in Zen aesthetics and the tea ceremony.",
    definition: "Seeing beauty in what is imperfect, impermanent, and incomplete: the worn, the weathered, the passing.",
    perceptualLens: "You notice the beauty in things that are aging, cracked, or not quite finished: a chipped mug you love, a face with lines, a season ending. You also notice how often you dismiss these because they aren't perfect.",
    shadowState: "Its absence is perfectionism and a constant urge to replace, upgrade, or fix, so that nothing is ever good enough to enjoy as it is. Its counterfeit is aesthetic posing: buying 'rustic' things to look wabi-sabi.",
    fieldPrompt: "Find one imperfect, worn, or aging thing around you today and look at it for a full minute. Notice what makes it beautiful because of its wear, not in spite of it.",
    examples: [
      { context: 'solitude', scene: "Your grandmother's wooden spoon is scorched on one side and worn smooth from decades of stirring. Holding it, you realize it is more beautiful than any new one could be." },
      { context: 'body', scene: "Looking in the mirror, you notice the lines around your eyes. For once, instead of reaching for a fix, you see them as a record of years of laughing." },
      { context: 'relationships', scene: "Your long marriage has scars: fights you survived and things you'd do differently. On a quiet evening you see that those scars are part of why it's yours." },
    ],
    nearMiss: {
      scene: "You buy a distressed-finish table designed to look old because it's in style.",
      whyNot: "That is the look of wabi-sabi, not the perception. Wabi-sabi is seeing real beauty in real wear and impermanence, including your own.",
    },
    tags: ["impermanence", "beauty", "acceptance", "japanese"],
  },
  {
    id: "akrasia",
    word: "Akrasia",
    pronunciation: "uh-KRAY-zhuh",
    originType: "existing",
    etymologyOrRoots: "Ancient Greek akrasía: lack of command over oneself, from a- (without) + krátos (power, mastery). Debated by Socrates and Aristotle.",
    definition: "Acting against your own better judgment: knowing what you think is best, and doing something else anyway.",
    perceptualLens: "You start catching the moment of the split, when you clearly know what you want to do and feel yourself turning toward something else. It is often a very small moment.",
    shadowState: "Unnoticed, akrasia becomes a pattern of quiet self-betrayal that you explain away after the fact. Its counterfeit is changing your 'better judgment' afterward, so you never have to admit you acted against it.",
    shadowNuanceNote: "Naming akrasia isn't meant to produce shame. It's a very human gap, and Aristotle thought almost everyone experiences it. The point is to see the moment clearly, since that is where any change begins.",
    fieldPrompt: "Today, watch for one moment where you know what you'd prefer to do and feel yourself heading elsewhere. Don't fight it; just name it: \"Akrasia.\" Notice what pulled you.",
    examples: [
      { context: 'body', scene: "You've decided to go to bed at ten. At 10:05, fully aware of the decision, you start another episode. You notice the exact moment you chose it." },
      { context: 'work', scene: "You know the hard report is what matters most today. You spend the morning answering easy emails, aware the whole time that you're avoiding it." },
      { context: 'relationships', scene: "You promised yourself you'd stay calm when your teenager pushes back. Ten seconds into the argument you hear yourself raising your voice, and part of you watches it happen." },
    ],
    nearMiss: {
      scene: "You change your plan to go running because a friend calls and needs to talk.",
      whyNot: "Your judgment itself changed: in that moment, being with your friend was the better choice. Akrasia is acting against what you still believe is best.",
    },
    tags: ["will", "self-betrayal", "habits", "aristotle"],
  },
  {
    id: "acedia",
    word: "Acedia",
    pronunciation: "uh-SEE-dee-uh",
    originType: "existing",
    etymologyOrRoots: "Late Latin acēdia, from Greek akēdía: lack of care, from a- (without) + kêdos (care, concern). Described by the 4th-century desert monks as the 'noonday demon.'",
    definition: "A restless listlessness: no longer caring about what used to matter, often combined with an urge to be anywhere but here, doing anything but this.",
    perceptualLens: "You notice the specific flatness that turns the meaningful into a chore, and the restlessness that comes with it: checking the clock, wandering, starting things and dropping them.",
    shadowState: "Acedia is itself the shadow of engaged care. It is easy to mistake for laziness, calm detachment, or even peace, which is why it so often goes unnamed.",
    shadowNuanceNote: "Acedia is the counterfeit of Plerostasis. Both lack pull and push, but plerostasis is awake and full while acedia is flat and restless. If you can't tell which one you're in, ask whether anything still feels worth caring about. Persistent acedia can also overlap with depression, which deserves real support rather than willpower.",
    fieldPrompt: "When a task you normally care about feels pointless today, pause and name it: \"Is this acedia?\" Then do one small part of it with full attention and notice whether any care returns.",
    examples: [
      { context: 'work', scene: "You used to love your work. Lately you sit down, stare at the screen, check your phone, get up for water, and sit down again. Nothing is wrong, and nothing seems worth doing." },
      { context: 'solitude', scene: "On a free Sunday you can't settle on anything. A book, a walk, a call: each feels flat before you start. By evening you've done nothing and rested no better." },
      { context: 'relationships', scene: "Your partner wants to plan a trip you'd once have been excited about. You hear yourself say \"Sure, whatever,\" and notice that you mean it in the dullest possible way." },
    ],
    nearMiss: {
      scene: "After finishing a huge project, you spend a whole day lying in the sun doing nothing, and it feels wonderful.",
      whyNot: "That is rest, which restores you and is chosen. Acedia is restless and joyless, and it doesn't refill anything.",
    },
    tags: ["listlessness", "numbness", "care", "contemplative"],
  },
  {
    id: "pleonexia",
    word: "Pleonexia",
    pronunciation: "plee-oh-NEK-see-uh",
    originType: "existing",
    etymologyOrRoots: "Ancient Greek pleonexía: greed, from pléon (more) + échein (to have). In Plato and Aristotle, the desire to have more than your share.",
    definition: "The insatiable urge for more: more money, status, attention, or experiences than you need or than is fair, where getting more never brings 'enough.'",
    perceptualLens: "You start to notice the 'more' reflex: refreshing for another notification, adding one more thing to the cart, measuring what you have against what someone else has.",
    shadowState: "Pleonexia is itself the shadow of sufficiency, the direct opposite of Plerostasis. Its counterfeit is ambition: healthy striving for something worthwhile can look similar from the outside.",
    shadowNuanceNote: "Wanting things isn't pleonexia. The mark of pleonexia is that getting the thing doesn't satisfy, and the target moves the moment you reach it. Healthy ambition can arrive somewhere and rest.",
    fieldPrompt: "The next time you want more of something today, ask, \"What would 'enough' be here?\" Notice whether you can name an amount, or whether the answer keeps moving.",
    examples: [
      { context: 'work', scene: "You get the raise you wanted, and within a week you're comparing your salary to a friend's and feeling underpaid again. The number changed, and the feeling didn't." },
      { context: 'solitude', scene: "Your post gets fifty likes and you check every few minutes for more. You notice that fifty felt like nothing and a hundred wouldn't feel like enough either." },
      { context: 'relationships', scene: "At a family dinner you find yourself quietly calculating whether your share of an inheritance is as large as your siblings'. Getting more wouldn't change how you feel about them, but the urge persists." },
    ],
    nearMiss: {
      scene: "You work hard to save for a house, buy it, and feel at home.",
      whyNot: "That was a goal with an end. Pleonexia is wanting that keeps moving the goalposts, so nothing is ever enough.",
    },
    tags: ["greed", "craving", "sufficiency", "plato"],
  },
  {
    id: "ressentiment",
    word: "Ressentiment",
    pronunciation: "ruh-sahn-tee-MAHN",
    originType: "existing",
    etymologyOrRoots: "French, 'resentment, re-feeling.' Developed by Nietzsche and Max Scheler to name a grudge that festers and reshapes a person's values.",
    definition: "A lingering, blaming grudge, often against people who seem more fortunate or powerful, that quietly reshapes what you value. You come to despise what you secretly wanted and praise what you're stuck with.",
    perceptualLens: "You notice when an old hurt or sense of unfairness is coloring your judgments today, especially when contempt for something shows up where envy or disappointment used to be.",
    shadowState: "Ressentiment is itself a shadow state: emotional hunger, as in Liberance's shadow, that has hardened into an identity. Its counterfeit is righteous principle, a moral stance that is really a wound in disguise.",
    shadowNuanceNote: "Some anger at real injustice is healthy and clarifying. Ressentiment differs in that it festers rather than acts, and it changes your values to protect you from the original hurt. The test: is this feeling moving you toward something, or only against someone?",
    fieldPrompt: "Notice one thing you feel contempt for today. Ask yourself, \"Did I once want this? Is something old hurting here?\" Just look; you don't need to change anything.",
    examples: [
      { context: 'work', scene: "You were passed over for a leadership role years ago. Since then you've told everyone that ambitious people are shallow. One day you notice the contempt is really the old disappointment, still unhealed." },
      { context: 'relationships', scene: "An old friend has become very successful. Each time they come up, you find a reason to criticize how they live. You realize you haven't actually spoken to them in years." },
      { context: 'solitude', scene: "Reading the news, you feel a familiar satisfaction when someone wealthy has a bad day. You notice how good it feels, and wonder what it is feeding." },
    ],
    nearMiss: {
      scene: "You're angry that your landlord ignored a safety problem for months, and you organize the other tenants to get it fixed.",
      whyNot: "That anger is directed at a real wrong and leads to action, and it ends when the problem is solved. Ressentiment lingers, festers, and changes what you value.",
    },
    tags: ["resentment", "envy", "grudge", "nietzsche"],
  },
  {
    id: "parrhesia",
    word: "Parrhesia",
    pronunciation: "puh-REE-zee-uh",
    originType: "existing",
    etymologyOrRoots: "Ancient Greek parrhēsía: frank speech, from pân (all) + rhêsis (speech). Saying everything, openly, at some risk to yourself.",
    definition: "Frank, courageous speech: telling the truth as you see it when it would be safer to stay quiet or soften it.",
    perceptualLens: "You notice the moments when you edit the truth down to something more comfortable, and the rarer moments when you, or someone else, say the real thing plainly and accept the cost.",
    shadowState: "Its absence is a life of strategic silence and polite half-truths, where what you say is always slightly less than what you think. Its counterfeit is brutal 'honesty' used as a weapon, truth-telling that serves your ego rather than the truth.",
    shadowNuanceNote: "Parrhesia carries risk for the speaker and is aimed at the truth. If you're the one who is safe and the other person bears all the cost, or if the point is to win rather than to be truthful, it has become cruelty in honesty's clothing.",
    fieldPrompt: "Once today, notice a moment when you're about to soften something true into something vague. Consider saying the clear version, kindly. Notice what it costs and what it gives.",
    examples: [
      { context: 'work', scene: "In a meeting where everyone is praising a plan, you say, \"I think this will fail, and here's why.\" The room goes quiet. Two people find you afterward to say they were thinking the same thing." },
      { context: 'relationships', scene: "Your best friend asks if you like their new partner. You say, gently, that you've noticed how they make fun of your friend in public, and that it worries you." },
      { context: 'solitude', scene: "Writing in a journal, you finally put down in plain words the thing you've been avoiding admitting: you don't want the career you're training for." },
    ],
    nearMiss: {
      scene: "You tell a coworker their presentation was \"honestly terrible\" in front of the team and call it being direct.",
      whyNot: "The coworker bore all the risk, and the point was to diminish them. Parrhesia puts the speaker at risk for the sake of the truth.",
    },
    tags: ["honesty", "courage", "speech"],
  },
  {
    id: "agape",
    word: "Agape",
    pronunciation: "uh-GAH-pay",
    originType: "existing",
    etymologyOrRoots: "Ancient Greek agápē: love, goodwill. Used in the New Testament for self-giving love, and in philosophy for love that seeks another's good unconditionally.",
    definition: "Unconditional, self-giving love: wanting and working for another's good without needing anything in return.",
    perceptualLens: "You notice care that doesn't keep score: the parent at 3 a.m., the stranger who stops to help, your own moments of giving without calculating what comes back.",
    shadowState: "Its absence is transactional love, where care is always measured against what you receive. Its counterfeit is self-sacrifice that secretly expects repayment, or giving that is really about being seen as generous.",
    shadowNuanceNote: "Agape is not self-erasure. Loving someone unconditionally doesn't mean accepting harm or abandoning your own needs. It wants the other's real good, which sometimes means saying no.",
    fieldPrompt: "Do one thing today for someone's good with no possibility of thanks or credit. Notice whether part of you still wants it noticed.",
    examples: [
      { context: 'relationships', scene: "Your elderly father, confused with dementia, doesn't recognize you anymore. You visit every Sunday and hold his hand anyway." },
      { context: 'work', scene: "A colleague who never helped you is struggling with a deadline. You quietly finish the part they're stuck on and don't mention it." },
      { context: 'solitude', scene: "Driving past an accident, you pull over and wait with a shaken stranger until the ambulance comes. You never learn their name." },
    ],
    nearMiss: {
      scene: "You do all the housework for weeks without being asked, then explode when your partner doesn't notice.",
      whyNot: "The giving was keeping an invisible ledger. Agape gives without the ledger, which is why it doesn't turn into resentment.",
    },
    tags: ["love", "giving", "relationships"],
  },
  {
    id: "ubuntu",
    word: "Ubuntu",
    pronunciation: "oo-BOON-too",
    originType: "existing",
    etymologyOrRoots: "Nguni Bantu (Zulu and Xhosa) ubuntu: humanity, humaneness. From the saying umuntu ngumuntu ngabantu, 'a person is a person through other people.'",
    definition: "The understanding that your humanity is bound up with other people's: you become fully a person through your relationships, and other people's dignity is tied to your own.",
    perceptualLens: "You notice how much of who you are came through others: a teacher's patience, a neighbor's help, a stranger's courtesy. You also notice when you treat someone as less than fully a person, and how that diminishes you too.",
    shadowState: "Its absence is radical individualism, the belief that you are self-made and owe nothing to anyone. Its counterfeit is group loyalty that stops at the edge of your own tribe.",
    fieldPrompt: "Today, pick one ability or comfort you have and trace it back to the people who made it possible. Notice how many there are.",
    examples: [
      { context: 'work', scene: "Accepting an award, you realize your success rests on a mentor who took a chance on you, a team that covered for you, and a cleaner who kept the building running. You name them all." },
      { context: 'relationships', scene: "When a neighbor's house floods, the whole street shows up with buckets. Afterward you feel closer to them, and more yourself, than you have in years." },
      { context: 'solitude', scene: "You catch yourself being curt with a cashier and feel smaller for it. You go back and apologize, and you leave feeling more human." },
    ],
    nearMiss: {
      scene: "Your community rallies to help its own members, but treats outsiders with suspicion and contempt.",
      whyNot: "That is loyalty to a group. Ubuntu recognizes a shared humanity that doesn't stop at the edge of the group.",
    },
    tags: ["community", "humanity", "relationships", "african"],
  },
  {
    id: "telos",
    word: "Telos",
    pronunciation: "TEL-oss",
    originType: "existing",
    etymologyOrRoots: "Ancient Greek télos: end, goal, purpose, fulfillment. For Aristotle, the end a thing is aimed at, which explains what it is for.",
    definition: "The purpose or end something is aimed at, the 'for the sake of which.' For a person, the deeper aim that gives the parts of a life their point.",
    perceptualLens: "You start asking what things are for: a meeting, a habit, an argument, a day. You notice which activities serve an aim you actually hold and which have become ends in themselves.",
    shadowState: "Its absence is drift, a life of activity without direction where means become ends and you're busy without knowing what for. Its counterfeit is a borrowed purpose, chasing a goal you inherited and never chose.",
    fieldPrompt: "Pick one recurring activity today and ask, \"What is this for?\" Then ask it again of your answer. Notice where the chain ends.",
    examples: [
      { context: 'work', scene: "Halfway through polishing a report, you ask what it's for. The answer is to help a team decide something, and you realize a one-page summary would serve that better than twenty pages." },
      { context: 'relationships', scene: "In a heated argument with your partner, you stop and ask what you're actually trying to achieve. It isn't winning; it's feeling heard. The conversation changes direction." },
      { context: 'solitude', scene: "On your birthday you ask what all the hard work of the past ten years has been for. You find a real answer underneath, and also a few things you can stop doing." },
    ],
    nearMiss: {
      scene: "You set a goal to run a marathon because everyone in your office is doing one, and you train miserably.",
      whyNot: "That aim was borrowed rather than discovered. Telos is the end that your life is actually aimed at, which you recognize rather than adopt.",
    },
    tags: ["purpose", "meaning", "aristotle"],
  },
  {
    id: "sisu",
    word: "Sisu",
    pronunciation: "SEE-soo",
    originType: "existing",
    etymologyOrRoots: "Finnish sisu, from sisus (interior, guts). Extraordinary determination in the face of adversity; a national ideal in Finland.",
    definition: "Quiet, stubborn courage that keeps going after ordinary strength has run out, without drama or complaint.",
    perceptualLens: "You notice the point where you would usually quit, and the reserve that sometimes appears just past it. You also notice it in others: the steady, uncomplaining persistence that rarely gets credit.",
    shadowState: "Its absence is giving up at the first real resistance. Its counterfeit is stubbornness that refuses to stop even when stopping is the wise choice, or grinding through pain to prove something.",
    shadowNuanceNote: "Sisu serves a worthwhile aim. Pushing on through injury, burnout, or a goal that no longer makes sense isn't sisu; it is the failure to listen. Phronesis decides when to persist; sisu supplies the strength.",
    fieldPrompt: "Today, when something gets hard and you want to stop, go one small step further than you planned. Notice what you find there.",
    examples: [
      { context: 'body', scene: "At mile twenty of a marathon your legs are gone. You don't speed up or make a scene; you just keep putting one foot in front of the other until the finish line." },
      { context: 'relationships', scene: "For two years you've been caring for a sick spouse. There's no applause and no end in sight, and you get up every morning and do it again." },
      { context: 'work', scene: "Your startup has failed twice. You quietly learn what went wrong and start a third time, with no speeches about resilience." },
    ],
    nearMiss: {
      scene: "You keep running on a painful knee because you refuse to miss a training day.",
      whyNot: "That is stubbornness without wisdom. Sisu persists toward a worthwhile end, and ruining your knee isn't one.",
    },
    tags: ["endurance", "courage", "resilience", "finnish"],
  },
  {
    id: "shoshin",
    word: "Shoshin",
    pronunciation: "SHOH-shin",
    originType: "existing",
    etymologyOrRoots: "Japanese shoshin, 初心: 'beginner's mind,' from sho (first, beginning) + shin (mind, heart). Popularized by the Zen teacher Shunryu Suzuki.",
    definition: "Beginner's mind: approaching something familiar with the openness, curiosity, and lack of assumptions of someone seeing it for the first time.",
    perceptualLens: "You notice how much of your day you see only through what you already know about it, and what appears when you look at a familiar face, task, or street as if it were new.",
    shadowState: "Its absence is expertise that has hardened into blindness: you know the answer before the question is finished. Its counterfeit is feigned naivety, pretending not to know to avoid responsibility.",
    fieldPrompt: "Choose one familiar thing today, such as your commute, a coworker, or your own hand, and look at it as if for the first time. Notice one thing you've never seen before.",
    examples: [
      { context: 'work', scene: "After twenty years teaching the same course, you sit in on a colleague's class as a student. You leave with three new ideas about material you thought you'd mastered." },
      { context: 'relationships', scene: "At dinner you ask your partner of fifteen years a question you've never asked, and listen as if you'd just met. You learn something surprising." },
      { context: 'solitude', scene: "Walking the route you take every day, you look up instead of at your phone and notice carvings above a doorway you've passed a thousand times." },
    ],
    nearMiss: {
      scene: "When asked to fix a recurring problem at work, you say, \"I'm new to this, I wouldn't know,\" though you've done it before.",
      whyNot: "That uses ignorance to avoid effort. Shoshin is openness that comes with full engagement.",
    },
    tags: ["openness", "curiosity", "zen", "attention"],
  },
  {
    id: "eunoia",
    word: "Eunoia",
    pronunciation: "yoo-NOY-uh",
    originType: "existing",
    etymologyOrRoots: "Ancient Greek eúnoia: goodwill, a well-disposed mind, from eû (well) + noûs (mind). Aristotle calls it the beginning of friendship.",
    definition: "Goodwill: a mind well-disposed toward others, wishing them well even before you know them.",
    perceptualLens: "You notice your default stance toward people: the first flicker of judgment or warmth when a stranger appears, and how a small bit of goodwill changes what follows.",
    shadowState: "Its absence is reflexive suspicion or contempt, assuming the worst of people until proven otherwise. Its counterfeit is politeness that is pleasant on the surface but wishes no one well.",
    fieldPrompt: "Today, silently wish three strangers well: \"I hope your day goes well.\" Notice how it changes how you see them, and how you feel.",
    examples: [
      { context: 'work', scene: "A new hire makes a clumsy mistake in their first week. Instead of filing it away against them, you find yourself hoping they settle in, and you tell them about your own early blunders." },
      { context: 'solitude', scene: "Stuck behind a slow driver, you catch the usual irritation and try something else: maybe they're nervous, or lost. You wish them well, and the irritation fades." },
      { context: 'relationships', scene: "Meeting your partner's ex at a party, you choose to wish them well instead of sizing them up. The evening is easier than you expected." },
    ],
    nearMiss: {
      scene: "You smile and say \"Have a nice day!\" to everyone on autopilot while privately judging them.",
      whyNot: "The manners are there but the goodwill isn't. Eunoia is the inner wish, not the outer script.",
    },
    tags: ["goodwill", "kindness", "relationships", "aristotle"],
  },
  {
    id: "flow",
    word: "Flow",
    pronunciation: "FLOH",
    originType: "existing",
    etymologyOrRoots: "English flow, in the specific psychological sense defined by Mihaly Csikszentmihalyi (1975): optimal experience in full absorption.",
    definition: "Complete absorption in an activity whose challenge matches your skill, so that self-consciousness falls away, time distorts, and the activity becomes its own reward.",
    perceptualLens: "You notice the conditions that bring it on, such as clear goals, immediate feedback, and the right difficulty, and the things that break it: interruptions, boredom, anxiety.",
    shadowState: "Its absence is a day split between boredom (too easy) and anxiety (too hard), with no stretch of deep engagement. Its counterfeit is absorption without growth, like losing hours to a slot machine or endless scrolling.",
    shadowNuanceNote: "Flow involves skill meeting challenge and leaves you more capable. The compulsive 'zone' of gambling or scrolling also distorts time, but it takes rather than gives. If you come out of it depleted and can't say what you did, it wasn't flow.",
    fieldPrompt: "Today, find one task that is just slightly beyond easy for you. Remove interruptions for twenty minutes and notice whether the absorption arrives.",
    examples: [
      { context: 'work', scene: "Debugging a hard problem, you look up and three hours have passed. You forgot to eat, and you feel energized rather than drained." },
      { context: 'body', scene: "On a technical climbing route, every move demands full attention. There is no room for worry about tomorrow; only the next hold exists." },
      { context: 'solitude', scene: "Playing the piano, you hit the point where your fingers know the piece and you are simply inside the music." },
    ],
    nearMiss: {
      scene: "You start a mobile game at 9 p.m. and look up at 1 a.m., foggy and vaguely ashamed.",
      whyNot: "Time vanished, but nothing in you grew and you came out depleted. That is compulsion, not flow.",
    },
    tags: ["absorption", "skill", "psychology", "work"],
  },
  {
    id: "saudade",
    word: "Saudade",
    pronunciation: "sow-DAH-djee",
    originType: "existing",
    etymologyOrRoots: "Portuguese saudade, from Latin sōlitās (solitude). Central to Portuguese and Brazilian poetry and fado music.",
    definition: "A deep, loving longing for someone or something absent, often aware it may never return, in which the ache and the love are felt together.",
    perceptualLens: "You notice how longing can be a form of love: the ache for a person, place, or time that shows how much it mattered. You start to recognize saudade as a way of honoring what you've lived.",
    shadowState: "Its absence is numbing yourself to loss so you never feel it, or moving on so fast that nothing gets honored. Its counterfeit is nostalgia that edits out the hard parts and makes the present seem worse by comparison.",
    shadowNuanceNote: "Saudade honors the past without wanting to live there. If the longing keeps you from engaging with the present, or if you're longing for a version of the past that never existed, it has turned into nostalgia or chronofog.",
    fieldPrompt: "Today, let yourself feel the longing for someone or something you've lost, for one minute, without trying to fix it. Notice whether the love is inside the ache.",
    examples: [
      { context: 'relationships', scene: "Years after your grandmother's death, the smell of her soup at a market stall stops you in your tracks. The ache is sharp, and underneath it is warmth: she was here, and she loved you." },
      { context: 'solitude', scene: "Driving past the house you grew up in, you feel the longing for that kitchen, those voices, that time. You don't want it back; you're grateful it was yours." },
      { context: 'body', scene: "Listening to a song from the summer you were twenty, you feel it in your chest before you can name it: saudade for who you were then." },
    ],
    nearMiss: {
      scene: "You spend evenings telling yourself that everything was better in high school and that life has gone downhill since.",
      whyNot: "That is nostalgia, which rewrites the past to diminish the present. Saudade loves what was without disowning what is.",
    },
    tags: ["longing", "memory", "love", "portuguese"],
  },
  {
    id: "mauvaise-foi",
    word: "Mauvaise foi",
    pronunciation: "moh-VEZ FWAH",
    originType: "existing",
    etymologyOrRoots: "French, 'bad faith.' Developed by Jean-Paul Sartre in Being and Nothingness (1943) for the self-deception of denying your own freedom.",
    definition: "Bad faith: deceiving yourself that you have no choice, hiding behind a role, a rule, or circumstance to avoid the responsibility of choosing.",
    perceptualLens: "You start to hear the phrases that carry it: \"I had to,\" \"That's just how I am,\" \"It's my job.\" You notice when they are true and when they are a way of not choosing.",
    shadowState: "Mauvaise foi is itself the shadow of Liberance. Where liberance is the relief of seeing your freedom to respond, bad faith is the quiet refusal to see it, because freedom brings responsibility.",
    shadowNuanceNote: "Sometimes constraints are real; not every \"I had to\" is bad faith. The test is honesty: are you describing a real limit, or using one to avoid a decision you could make?",
    fieldPrompt: "Today, catch one moment when you say or think \"I have to\" or \"I can't.\" Ask, \"Is that true, or am I choosing this?\" Just notice the answer.",
    examples: [
      { context: 'work', scene: "You tell yourself you stay late every night because the job demands it. One evening you notice that no one has asked you to; you stay because you're afraid of being seen as less committed." },
      { context: 'relationships', scene: "\"I'm just not a feelings person,\" you tell your partner when they ask how you are. You hear it this time as a door you're holding shut." },
      { context: 'solitude', scene: "You blame your upbringing for not taking risks. You realize that you're now forty, and that the choice not to has been yours for a long time." },
    ],
    nearMiss: {
      scene: "You say you can't take a job across the country because you are your mother's only caregiver.",
      whyNot: "That describes a real constraint you've chosen to honor. Bad faith pretends the choice isn't yours; here you know it is.",
    },
    tags: ["freedom", "self-deception", "existentialism", "choice"],
  },
  {
    id: "amour-propre",
    word: "Amour-propre",
    pronunciation: "ah-MOOR PROH-pruh",
    originType: "existing",
    etymologyOrRoots: "French, 'self-love.' Jean-Jacques Rousseau distinguished it from amour de soi (natural self-care): amour-propre is self-regard that depends on comparison and others' opinions.",
    definition: "Self-regard that depends on how others see you: a sense of worth that rises and falls with comparison, approval, and status.",
    perceptualLens: "You notice how often your mood depends on being seen a certain way: checking reactions, comparing yourself, rehearsing how you'll come across. You also notice the rarer moments when you act without caring how it looks.",
    shadowState: "Amour-propre is itself a shadow state, often the root of emotional hunger. Its counterfeit is false humility: putting yourself down so that others will lift you back up.",
    shadowNuanceNote: "Wanting to be respected is human, and caring what people you trust think of you can be healthy. Amour-propre is when your worth itself depends on the comparison, so that someone else's win feels like your loss.",
    fieldPrompt: "Today, notice one moment when you're performing for an audience, real or imagined. Ask, \"What would I do here if no one would ever know?\"",
    examples: [
      { context: 'solitude', scene: "You post a photo and check the likes every few minutes. When it underperforms, you feel a drop in self-worth over something you enjoyed an hour ago." },
      { context: 'work', scene: "A colleague's idea gets praised in a meeting and you feel a small sting, as if their recognition took something from you." },
      { context: 'relationships', scene: "At a dinner party you notice you've spent most of the evening steering conversations toward your achievements, and that you barely heard anyone else." },
    ],
    nearMiss: {
      scene: "You ask your closest friend for honest feedback on your writing and feel hurt when they say it needs work.",
      whyNot: "Caring about the opinion of someone you trust, and feeling hurt, is human. Amour-propre is when your sense of worth rides on how others rank you.",
    },
    tags: ["approval", "comparison", "self-worth", "rousseau"],
  },
  {
    id: "schadenfreude",
    word: "Schadenfreude",
    pronunciation: "SHAH-den-froy-duh",
    originType: "existing",
    etymologyOrRoots: "German, from Schaden (harm, damage) + Freude (joy).",
    definition: "Pleasure at someone else's misfortune.",
    perceptualLens: "You notice the small, quick satisfaction when a rival stumbles, a celebrity falls, or a smug person gets their comeuppance, and what that satisfaction is feeding.",
    shadowState: "Schadenfreude is the shadow of Mudita: joy at another's loss instead of their good fortune. Its counterfeit is 'justice': dressing up pleasure in someone's pain as satisfaction that they got what they deserved.",
    shadowNuanceNote: "Feeling it isn't a moral failure; almost everyone does. The lens is noticing it as it happens, and asking what envy, hurt, or comparison it is coming from.",
    fieldPrompt: "Today, if you feel a flicker of pleasure at someone's bad news, name it: \"Schadenfreude.\" Then ask what it's connected to.",
    examples: [
      { context: 'work', scene: "The colleague who got the promotion over you makes a big mistake in front of the director. You notice a small, warm satisfaction before you notice anything else." },
      { context: 'solitude', scene: "A celebrity you find arrogant is caught in a scandal. You read every article, and realize you're enjoying it far more than the facts warrant." },
      { context: 'relationships', scene: "Your sister's new business struggles, and part of you is pleased, because she always seemed to have it easier. Naming it, you see the old comparison underneath." },
    ],
    nearMiss: {
      scene: "A corrupt official is finally convicted, and you feel relief that justice was done.",
      whyNot: "Relief at accountability is not the same as enjoying someone's suffering. Schadenfreude takes pleasure in the pain itself, often over small or personal matters.",
    },
    tags: ["envy", "comparison", "emotion", "german"],
  },
  {
    id: "hubris",
    word: "Hubris",
    pronunciation: "HYOO-bris",
    originType: "existing",
    etymologyOrRoots: "Ancient Greek hýbris: wanton violence, insolence, arrogance. In Greek tragedy, the pride that defies limits and invites downfall.",
    definition: "Overreaching pride: overestimating your power, knowledge, or invulnerability, and ignoring the limits everyone else can see.",
    perceptualLens: "You notice the moments of certainty that skip the checks: \"I don't need to double-check,\" \"Rules don't apply here,\" \"I've got this.\" You start to see the overconfidence before the fall rather than after it.",
    shadowState: "Hubris is itself a shadow state, the opposite of the self-knowledge in Sophrosyne. Its counterfeit is confidence: earned self-trust can look similar, but it stays aware of its limits.",
    shadowNuanceNote: "Hubris is easy to see in others and hard to see in yourself. The test isn't how sure you feel; it's whether you still listen to warnings and check your work.",
    fieldPrompt: "Today, before one decision you feel sure about, ask, \"What would I see if I were wrong?\" Look for one sign you might be missing.",
    examples: [
      { context: 'work', scene: "You skip testing a change because you've done it a hundred times. It breaks the system for half a day, and you realize the confidence itself was the risk." },
      { context: 'body', scene: "Feeling strong, you hike past the turnaround time despite the clouds. You make it down, barely, and recognize how close the line was." },
      { context: 'relationships', scene: "Certain you know what your partner will say, you stop listening halfway through, and you're wrong." },
    ],
    nearMiss: {
      scene: "An experienced surgeon calmly takes on a difficult operation others refuse, after careful planning.",
      whyNot: "That confidence is earned and checked against reality. Hubris ignores limits; mastery knows them precisely.",
    },
    tags: ["pride", "limits", "greek", "overconfidence"],
  },
  {
    id: "sophistry",
    word: "Sophistry",
    pronunciation: "SOF-iss-tree",
    originType: "existing",
    etymologyOrRoots: "From the Sophists, paid teachers of rhetoric in classical Athens, criticized by Plato for teaching how to win arguments rather than find truth.",
    definition: "Clever but deceptive reasoning: arguments built to persuade or win rather than to find out what is true.",
    perceptualLens: "You notice arguments that sound airtight but leave you uneasy, and the moment in your own thinking when you start building a case for what you already want rather than asking what's true.",
    shadowState: "Sophistry is itself a shadow state, the counterfeit of good reasoning. It is a common tool of lexoduction and culpaduction, and it is often most active in the arguments you make to yourself.",
    shadowNuanceNote: "Persuasion itself isn't sophistry; a sound argument can also be convincing. The test is direction: would you still make the argument if the conclusion went against you?",
    fieldPrompt: "Today, catch yourself justifying one decision. Ask, \"Would I accept this reasoning if it led somewhere I didn't want?\"",
    examples: [
      { context: 'solitude', scene: "You build a long, clever case for why skipping the gym today is actually better for your fitness. Halfway through, you notice you decided first and argued second." },
      { context: 'work', scene: "A sales pitch walks you step by step to a conclusion that sounds unavoidable. Afterward you realize each step was slightly slanted, and the whole was misleading." },
      { context: 'relationships', scene: "In an argument you hear yourself picking on your partner's word choice instead of answering their point. You're trying to win, not to understand." },
    ],
    nearMiss: {
      scene: "A lawyer argues their client's case as strongly as possible in court, within an adversarial system everyone understands.",
      whyNot: "The roles are open and the opposing argument is heard. Sophistry disguises winning as truth-seeking.",
    },
    tags: ["reasoning", "persuasion", "plato", "discernment"],
  },
  {
    id: "hamartia",
    word: "Hamartia",
    pronunciation: "hah-mar-TEE-uh",
    originType: "existing",
    etymologyOrRoots: "Ancient Greek hamartía: a missing of the mark, from hamartánein (to miss the target), used in Homer for a spear that misses. Aristotle used it for a tragic hero's error of judgment. It later became the main New Testament word for sin.",
    definition: "Missing the mark: a recurring error of aim or judgment, often small, that shapes the direction of a life.",
    perceptualLens: "You notice your characteristic misses: the same kind of misjudgment showing up in different situations, aimed a little to one side of where you meant to go.",
    shadowState: "Unseen, hamartia repeats. The same miss plays out in job after job or relationship after relationship, and it is blamed on circumstances each time. Its counterfeit is calling every mistake a 'fatal flaw,' which turns a correctable aim into an identity.",
    shadowNuanceNote: "Hamartia is an archer's word before it is a moral one. Seeing your miss isn't a verdict on who you are; it is information about your aim. Archers adjust.",
    fieldPrompt: "Think of something that has gone wrong more than once in your life in a similar way. Ask, \"Where am I aiming that keeps landing here?\"",
    examples: [
      { context: 'relationships', scene: "Your third close friendship has ended the same way: you avoid saying what bothers you until it bursts. You see that the miss isn't in the friends; it's in your aim." },
      { context: 'work', scene: "You keep taking on more than you can deliver because you want to please everyone. Each time, the overpromise is the miss that sets everything else in motion." },
      { context: 'solitude', scene: "Reviewing old journals, you notice you always choose security over the thing you really want, and you always regret it a year later. The pattern is the miss." },
    ],
    nearMiss: {
      scene: "You miss a train once because of a traffic accident on the way to the station.",
      whyNot: "That was bad luck, not your aim. Hamartia is a recurring miss in your own judgment, not chance.",
    },
    tags: ["error", "patterns", "aristotle", "greek"],
  },
  {
    id: "weltschmerz",
    word: "Weltschmerz",
    pronunciation: "VELT-shmairts",
    originType: "existing",
    etymologyOrRoots: "German, from Welt (world) + Schmerz (pain). Coined by the writer Jean Paul in the early 19th century.",
    definition: "World-weariness: a sorrow that the world falls short of how it should be, felt as a general heaviness rather than a specific grief.",
    perceptualLens: "You notice the heaviness that settles in after too much news, or the sense that nothing is as it should be, and how it colors everyday things that have nothing to do with it.",
    shadowState: "Unchecked, weltschmerz slides into Tepidaimonia or Acedia: why bother when everything is broken? Its counterfeit is sophistication, cynicism worn as a sign that you see more clearly than others.",
    shadowNuanceNote: "Grief at the world's real failures is honest and can be a form of care. It turns into weltschmerz's shadow when it stops leading to anything, so that the sorrow becomes a reason not to love or act on what's right in front of you.",
    fieldPrompt: "When you feel the weight of the world today, name it, then name one small, good, real thing within arm's reach. Notice whether both can be true at once.",
    examples: [
      { context: 'solitude', scene: "After an hour of news, you feel a grey heaviness and can't enjoy the dinner you were looking forward to. You notice the world's sorrow has settled into an ordinary evening." },
      { context: 'relationships', scene: "Your friend's excitement about a small win feels pointless to you given everything wrong in the world. You catch the thought and see what it's taking from you both." },
      { context: 'work', scene: "Working on climate policy, you go through a month where every effort feels like a drop in an ocean. You name the weltschmerz and choose to keep going anyway." },
    ],
    nearMiss: {
      scene: "After a natural disaster in another country, you feel deep sadness and donate to the relief effort.",
      whyNot: "That grief is specific and leads to action. Weltschmerz is a diffuse heaviness about the world as a whole, which often leads nowhere.",
    },
    tags: ["sorrow", "world", "cynicism", "german"],
  },
  {
    id: "lebenslust",
    word: "Lebenslust",
    pronunciation: "LAY-bens-loost",
    originType: "existing",
    etymologyOrRoots: "German, from Leben (life) + Lust (desire, appetite, delight). 'Lust for life.'",
    definition: "An inner hunger to live fully, vividly, and completely: the felt desire for more life, as distinct from any particular action taken to get it.",
    perceptualLens: "You start to notice when the desire for a fuller life stirs: a pull toward a trip, a conversation, a creative project, a morning outdoors. You also notice when it has gone quiet, and what tends to wake it back up.",
    shadowState: "Its absence is Tepidaimonia, a life at a low setting with no hunger for more. Its counterfeit is restless thrill-seeking that mistakes intensity for fullness, chasing the next high without ever feeling more alive afterward.",
    shadowNuanceNote: "Lebenslust is the desire for more life, not more things; wanting more possessions or status is Pleonexia. Real lebenslust tends to leave you more present where you are, while its counterfeit makes the present feel never enough.",
    fieldPrompt: "Today, notice one moment when you feel a pull toward living more fully: a place, a person, an idea. Don't act on it yet. Just feel the desire and name it: \"Lebenslust.\"",
    examples: [
      { context: 'solitude', scene: "Watching a sunrise from a hilltop, you feel a surge of wanting: to see more mornings like this, to say yes more, to waste less time. Nothing has changed yet, but something in you is awake." },
      { context: 'relationships', scene: "At a friend's seventieth birthday you watch her dance with complete abandon. You feel a hunger rise in you to live that fully, now, not someday." },
      { context: 'body', scene: "Recovering from a long illness, you take your first walk outside in weeks. The smell of rain, the ache in your legs, the sky: you want all of it, and more of it, with a fierceness you'd forgotten." },
    ],
    nearMiss: {
      scene: "You book skydiving, a weekend in Las Vegas, and a motorcycle trip in a single month, and still feel flat on Monday morning.",
      whyNot: "That chases intensity rather than fullness. Lebenslust is the inner appetite for life itself, and it makes ordinary days feel more vivid, not only the extraordinary ones.",
    },
    tags: ["vitality", "desire", "aliveness", "german"],
  },
  {
    id: "peiraphilia",
    word: "Peiraphilia",
    pronunciation: "pay-ruh-FIL-ee-uh",
    originType: "coined",
    etymologyOrRoots: "Coined. Greek peîra (a trial, an attempt, the root of 'empirical') + philía (love). Spelled peira- so it isn't confused with pyro- (fire).",
    definition: "A love of trying: the state of being willing to attempt new things without letting the fear of failure decide for you.",
    perceptualLens: "You start to notice the moment before an attempt, when part of you leans in and part of you hangs back. You see how often 'I'm not good at that' is really 'I haven't tried that,' and you notice what opens up when you try anyway.",
    shadowState: "Its shadow is Atychiphobia, the fear of failure, which keeps you inside what you already know you can do. Its counterfeit is recklessness: trying things carelessly so that failure never counts, because you never really cared.",
    shadowNuanceNote: "Peiraphilia doesn't require fearlessness. The fear may still be there; it just doesn't get the deciding vote. A failure is treated as information about the attempt, not a verdict on you. If trying new things has become a way to avoid ever going deep, that is restlessness rather than love of trying.",
    fieldPrompt: "Today, try one small thing you've never done and might be bad at: a new route, a recipe, a question in a meeting. Notice the moment of hesitation, then notice what you learned.",
    examples: [
      { context: 'work', scene: "Asked who wants to lead the new project nobody understands yet, you raise your hand. You have no idea if you can do it, and the not-knowing feels more like excitement than threat." },
      { context: 'body', scene: "At fifty you take your first dance class. You're clumsy and laugh at yourself, and you can't wait to come back next week." },
      { context: 'solitude', scene: "You try writing a poem, your first since school. It's not good, and you don't mind; you're curious what the second one will be like." },
    ],
    nearMiss: {
      scene: "You take up a new hobby every month and drop each one as soon as it gets difficult.",
      whyNot: "That loves novelty more than trying. Peiraphilia includes staying with an attempt long enough to fail and learn, not only the thrill of beginning.",
    },
    tags: ["courage", "trying", "growth", "failure"],
  },
  {
    id: "atychiphobia",
    word: "Atychiphobia",
    pronunciation: "uh-TIK-ih-FOH-bee-uh",
    originType: "existing",
    etymologyOrRoots: "From Greek atychía (misfortune, failure; a- 'without' + týchē 'fortune') + phóbos (fear). An established term for the fear of failure.",
    definition: "The fear of failure: a fear strong enough to keep you from attempting things where you might not succeed.",
    perceptualLens: "You start to notice the quiet ways the fear steers your choices: the opportunity you talk yourself out of, the project you keep 'polishing' instead of sharing, the game you won't play because you might lose.",
    shadowState: "Atychiphobia is itself the shadow of Peiraphilia. It often disguises itself as being sensible, having high standards, or 'just not interested,' which is why it can run a life for years without being named.",
    shadowNuanceNote: "Some caution about failure is wise; not every risk is worth taking. Atychiphobia is when the fear decides by default, before you've weighed whether the attempt is worth it. In its clinical form it can be severe and deserves real support.",
    fieldPrompt: "Today, notice one thing you're avoiding. Ask, \"If I knew I couldn't fail, would I do this?\" If the answer is yes, notice that the fear, not the choice, has been deciding.",
    examples: [
      { context: 'work', scene: "You've had a business idea for six years and a detailed plan for two. Every time you're about to start, you find one more thing to research." },
      { context: 'relationships', scene: "At a party everyone is singing karaoke. You'd love to join, and you tell everyone you'd rather just watch." },
      { context: 'solitude', scene: "You haven't played the piano since a bad recital at fourteen. Every time you walk past one, you feel the pull and the old fear at the same time." },
    ],
    nearMiss: {
      scene: "You decide not to invest your savings in a friend's risky venture after looking carefully at the numbers.",
      whyNot: "That was a weighed decision, not a fear deciding for you. Atychiphobia avoids before it weighs.",
    },
    tags: ["fear", "failure", "avoidance", "shadow"],
  },
  {
    id: "neophilia",
    word: "Neophilia",
    pronunciation: "nee-oh-FIL-ee-uh",
    originType: "existing",
    etymologyOrRoots: "Greek néos (new) + philía (love). Used in psychology and biology for a strong attraction to novelty.",
    definition: "A love of the new: a strong attraction to novelty, new experiences, ideas, places, and things.",
    perceptualLens: "You start to notice the bright pull of the unfamiliar, and how it keeps life fresh. You also notice when the pull is toward the new itself rather than toward anything the new would give you.",
    shadowState: "Its absence is neophobia, a fear of the new that keeps life narrow and familiar. Its own shadow is restlessness: always chasing the next thing so you never have to go deep with anything.",
    shadowNuanceNote: "Neophilia is a gift when it opens you to the world, and a trap when it keeps you from staying. The test is whether novelty leads somewhere, into learning or connection, or just leads to the next novelty.",
    fieldPrompt: "Today, notice one thing you're drawn to simply because it's new. Ask, \"What do I hope this will give me?\" Notice whether there's an answer beyond the newness.",
    examples: [
      { context: 'solitude', scene: "Traveling, you take a different street every evening just to see where it goes. One leads you to a tiny music bar you'll remember for years." },
      { context: 'work', scene: "When a new tool appears, you're the first to try it. Sometimes it changes how your whole team works; sometimes it's just shiny." },
      { context: 'relationships', scene: "A friend suggests a cuisine you've never tried. You're excited before you've even looked at the menu." },
    ],
    nearMiss: {
      scene: "You preorder every new phone the day it's announced, then barely notice the difference.",
      whyNot: "That is consumption of novelty, closer to Pleonexia. Neophilia at its best opens you to experience, not just acquisition.",
    },
    tags: ["novelty", "curiosity", "openness"],
  },
];

export const lexiconById: Record<string, WordEntry> = Object.fromEntries(
  lexicon.map((w) => [w.id, w]),
);

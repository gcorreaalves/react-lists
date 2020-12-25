import React from 'react'
import faker from 'faker'
import { Box, makeStyles } from '@material-ui/core'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import darcula from 'react-syntax-highlighter/dist/cjs/styles/prism/darcula'
import { GroupList } from '@react-lists/core'

const useStyles = makeStyles(theme => ({
  contact: {
    marginBottom: theme.spacing(2),
    width: '100%'
  },
  name: {
    fontSize: theme.typography.pxToRem(14),
    fontWeight: 'bold',
    paddingBottom: 5
  },
  phone: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: 'normal',
    paddingBottom: 5
  },
  email: {
    fontSize: theme.typography.pxToRem(12),
    fontWeight: 'normal'
  }
}))

const contacts = [
  {
    id: '45661d92-7616-402f-b94f-4486193511d9',
    name: 'Winifred Schowalter',
    phone: '271-654-4871',
    email: 'Lavada.Luettgen96@yahoo.com'
  },
  {
    id: '7f171f4c-0843-4c0b-9cfa-6f6310296ace',
    name: 'Kirk Nitzsche',
    phone: '929-203-0359',
    email: 'Cecile_Goyette85@hotmail.com'
  },
  {
    id: '368fe7c9-1d6f-4121-ae2a-08205fdf6c57',
    name: 'Marta Zemlak',
    phone: '556-995-3605',
    email: 'Daphnee_Will17@yahoo.com'
  },
  {
    id: '5bb7af5e-c6fc-46d3-a441-975683fa3704',
    name: 'Elena Bode',
    phone: '693-896-9582',
    email: 'Tod_Feest23@yahoo.com'
  },
  {
    id: 'cdefac5d-803a-469a-85ef-272686e7bd0c',
    name: 'Elvira Schmitt',
    phone: '585-576-3268',
    email: 'Lysanne.Smith16@hotmail.com'
  },
  {
    id: '2c22c773-35a2-41a1-b133-80ccd05322a8',
    name: 'Earl Parker',
    phone: '487-978-1542',
    email: 'Shania.Reynolds@gmail.com'
  },
  {
    id: '22fc3cb1-2827-4a90-89da-451468e34ad6',
    name: 'Jerald Altenwerth PhD',
    phone: '697-403-7697',
    email: 'Marco_Hessel56@hotmail.com'
  },
  {
    id: '274fc086-cc5b-47ee-b317-8845451c4561',
    name: 'Miss Cecelia Hettinger',
    phone: '698-775-6289',
    email: 'Ludie_Homenick@yahoo.com'
  },
  {
    id: 'bf497206-6433-48e3-8487-6e1b401ba291',
    name: 'Preston Wyman',
    phone: '237-442-8309',
    email: 'Lenore_Padberg@hotmail.com'
  },
  {
    id: '4653cc2d-49a2-4a7c-b8a2-a83616cf435f',
    name: 'Dr. Tabitha Hettinger',
    phone: '444-759-2661',
    email: 'Alfonso54@gmail.com'
  },
  {
    id: '2ccf4fc2-9cc9-43c0-9f52-2e3ece96a0d6',
    name: 'Stella Reinger',
    phone: '853-371-5624',
    email: 'Queen69@hotmail.com'
  },
  {
    id: '14f5626a-5d95-4811-9c6a-675d5efcff0e',
    name: 'Connie Kuhn',
    phone: '215-576-3959',
    email: 'Dayana33@gmail.com'
  },
  {
    id: 'd8187852-90f5-4f24-b8e3-33b17092bda6',
    name: 'Ms. Kerry McDermott',
    phone: '376-816-2452',
    email: 'Cary_Lebsack45@gmail.com'
  },
  {
    id: '074a7520-bb2d-4663-aef9-64663b79289e',
    name: 'Micheal Ward',
    phone: '637-677-9166',
    email: 'Zane.Blick@hotmail.com'
  },
  {
    id: '3bdf0849-42c3-4f8e-9ae7-b254b992c690',
    name: 'Mrs. Ginger Pfannerstill',
    phone: '760-372-3775',
    email: 'Jessika_Stiedemann22@hotmail.com'
  },
  {
    id: '08216549-253a-486a-a93b-babfca55c428',
    name: 'Marcus Borer',
    phone: '900-547-9827',
    email: 'Priscilla_Nitzsche57@gmail.com'
  },
  {
    id: 'df94185f-4bad-4870-a899-cce8a5b6ea84',
    name: 'Jeanne Corkery II',
    phone: '924-863-4692',
    email: 'Brooke_Kilback@gmail.com'
  },
  {
    id: 'd8a018cc-891d-449b-b5f7-956b21c1b05c',
    name: 'Kelly Barrows',
    phone: '510-664-5428',
    email: 'Novella_Windler80@hotmail.com'
  },
  {
    id: 'ccfe4cd5-3ccb-43c8-ba35-08dbe8bfe64d',
    name: 'Mrs. Chester Nicolas',
    phone: '810-404-2992',
    email: 'Alexys99@yahoo.com'
  },
  {
    id: '714e4886-70e4-45b2-b8f8-264f41a8a557',
    name: 'Katie Muller',
    phone: '801-701-6512',
    email: 'Dayne61@hotmail.com'
  },
  {
    id: '53c53c29-3dff-4c0c-856d-5744249412c7',
    name: 'Diana McClure Sr.',
    phone: '881-762-0231',
    email: 'Jan.Rath@yahoo.com'
  },
  {
    id: 'c383f00a-fa0a-425c-b378-85afc0c18b19',
    name: 'Ms. Alison Aufderhar',
    phone: '680-358-6072',
    email: 'Joesph_Padberg84@gmail.com'
  },
  {
    id: '20bd8176-6460-4e9c-b939-87ac8ee38325',
    name: 'Lance Flatley',
    phone: '278-343-1982',
    email: 'Hattie4@gmail.com'
  },
  {
    id: 'b66117f5-0ce0-497d-8d1c-3a90bf03ec7c',
    name: 'Jonathon Weissnat',
    phone: '256-983-4671',
    email: 'Eugenia.Goyette93@gmail.com'
  },
  {
    id: 'c269f772-f9e6-4cf7-a9dd-4d4b3d3375aa',
    name: 'Boyd Boyle',
    phone: '487-725-2722',
    email: 'Verlie98@gmail.com'
  },
  {
    id: '120b530b-2aed-4992-a60e-c539e0ee9c1f',
    name: 'Ray Mraz',
    phone: '387-994-4835',
    email: 'Asa_Hahn97@yahoo.com'
  },
  {
    id: '0a12fa95-e1eb-4ac1-9a9d-40070db54c5b',
    name: 'Cora Reichert V',
    phone: '406-929-9623',
    email: 'Lionel.Heaney@gmail.com'
  },
  {
    id: '58e6bdef-d84e-436f-ad29-c578eb01e62b',
    name: 'Candice Kohler',
    phone: '237-704-4707',
    email: 'Rodrick.Champlin87@gmail.com'
  },
  {
    id: '4fc82db4-e6a2-4650-bccf-bf905e70f120',
    name: 'Emily Boyer',
    phone: '992-461-4344',
    email: 'Dante.Ritchie96@hotmail.com'
  },
  {
    id: '75adfe49-59c0-46e5-a7ee-af2e29c0d80e',
    name: 'Ellis Kuhic',
    phone: '415-616-8306',
    email: 'Ludie66@yahoo.com'
  },
  {
    id: 'b1842514-19fd-4276-9aa1-879d2f982da7',
    name: 'Irma Jacobi',
    phone: '549-946-0239',
    email: 'Sierra34@yahoo.com'
  },
  {
    id: '1db9f049-3abe-4333-8d6e-f8ea50907ade',
    name: 'Scott Bergstrom I',
    phone: '448-231-4434',
    email: 'Dewayne68@hotmail.com'
  },
  {
    id: 'd6715ad1-f9fd-4d35-a797-a52dafea0437',
    name: 'Hilda Mohr',
    phone: '418-950-3909',
    email: 'Hillard72@yahoo.com'
  },
  {
    id: '209c1825-eedb-41ce-80a8-21ab4a2a3cf7',
    name: 'Clara Koelpin',
    phone: '478-331-7036',
    email: 'Murray_Jast23@yahoo.com'
  },
  {
    id: 'c80f5c0d-efa3-4734-9008-9bfedc717314',
    name: 'Camille Adams',
    phone: '364-556-3536',
    email: 'Estell44@hotmail.com'
  },
  {
    id: '1cf9a2b7-fd3b-497d-9a34-df87b3cf4171',
    name: 'Julie Cremin',
    phone: '660-901-8471',
    email: 'Deontae76@hotmail.com'
  },
  {
    id: 'b2c6365a-6673-41f8-850f-c18fc5b9ab00',
    name: 'Whitney Vandervort',
    phone: '612-299-9009',
    email: 'Marshall80@hotmail.com'
  },
  {
    id: '5ecadb7a-6130-4098-833e-49ff47258d1e',
    name: 'Guillermo Hara',
    phone: '467-773-0374',
    email: 'Carter_Windler88@hotmail.com'
  },
  {
    id: '8d14f432-41c8-4277-8260-744294975cbf',
    name: 'Elaine Homenick',
    phone: '454-969-2818',
    email: 'Yolanda.Kohler@hotmail.com'
  },
  {
    id: '9455df8c-73ee-48c1-bb48-62e1ffd46c5b',
    name: 'Diane Miller',
    phone: '957-689-6302',
    email: 'Lacy58@hotmail.com'
  },
  {
    id: '4654d2f2-c848-4ed4-9964-c59cc14b6448',
    name: 'Lowell Hahn',
    phone: '363-442-4672',
    email: 'Stevie_Wunsch@hotmail.com'
  },
  {
    id: '6c17bf9b-9d85-4c33-88dd-48cfdbf7338c',
    name: 'Joel Zulauf',
    phone: '253-928-0858',
    email: 'Mohamed.Dibbert14@gmail.com'
  },
  {
    id: 'b86256ca-88f7-4cdc-a122-9e47f82eec3f',
    name: 'Hannah Schneider Jr.',
    phone: '206-517-9276',
    email: 'Clint39@yahoo.com'
  },
  {
    id: '5bc495aa-4352-47c5-be7e-27ed6a135f5c',
    name: 'Cora Gaylord',
    phone: '540-257-9126',
    email: 'Bridgette.Wuckert@hotmail.com'
  },
  {
    id: 'eba07c78-3fde-46f5-a958-9ee77b1c5ecc',
    name: 'Rachael Anderson',
    phone: '676-695-8424',
    email: 'Roslyn_Herman35@hotmail.com'
  },
  {
    id: 'd7442802-6867-49d6-adeb-39d2a8ac125a',
    name: 'Alberto Lubowitz',
    phone: '428-481-5329',
    email: 'Ambrose83@yahoo.com'
  },
  {
    id: 'ae813ac2-c080-4f0d-8507-2527e9ed09aa',
    name: 'Sam Thiel',
    phone: '931-737-5106',
    email: 'Winfield1@yahoo.com'
  },
  {
    id: '1dde4816-e950-4591-94db-6f43fb1d48c9',
    name: 'Cristina Reilly',
    phone: '642-960-5448',
    email: 'Vilma46@gmail.com'
  },
  {
    id: '81c9e90f-2875-4cd2-a621-fd3ba479e6af',
    name: 'Brian Hettinger',
    phone: '950-642-2250',
    email: 'Philip.Heaney72@gmail.com'
  },
  {
    id: 'd8230a7a-9e76-4354-9054-a2108952383b',
    name: 'Andy Hartmann I',
    phone: '931-835-4952',
    email: 'Roscoe87@hotmail.com'
  },
  {
    id: '9096e9b4-895d-43af-ad41-bb4150badf91',
    name: 'Frances Ratke',
    phone: '536-686-4044',
    email: 'Bonita.Thompson79@yahoo.com'
  },
  {
    id: '3616935d-a48b-439f-acae-8341511eb589',
    name: 'Mr. Kristi Purdy',
    phone: '499-432-0233',
    email: 'Joaquin_Rice@gmail.com'
  },
  {
    id: 'a75991f7-2a3a-46c8-afb0-39cc27ecbc9b',
    name: 'Jose Lesch',
    phone: '529-600-7782',
    email: 'Rossie21@yahoo.com'
  },
  {
    id: 'e1ac87ca-3260-493a-b355-b5aae24c988d',
    name: 'Blanca Schiller',
    phone: '926-336-3811',
    email: 'Kennedi_Johnston@gmail.com'
  },
  {
    id: 'c75f2f9d-e0bf-49c2-b586-da78d5433e0d',
    name: 'Olive Nicolas I',
    phone: '539-340-6038',
    email: 'Keyon_Harber31@hotmail.com'
  },
  {
    id: 'a4e848bc-7d63-4546-9fa2-cf84f4bb81ac',
    name: 'Bradford Kassulke',
    phone: '591-454-0643',
    email: 'Kaitlyn_Bashirian43@yahoo.com'
  },
  {
    id: '6c53d9e6-a1b2-4742-bc3c-485198040048',
    name: 'Ella Botsford',
    phone: '605-876-8185',
    email: 'Madie74@yahoo.com'
  },
  {
    id: '90410922-df5b-4b49-ac41-723eca497457',
    name: 'Ignacio Bechtelar',
    phone: '499-543-3038',
    email: 'Richmond10@hotmail.com'
  },
  {
    id: '6c033caf-75c4-4368-b4bf-30262ce0a1e8',
    name: 'Angie Gleason',
    phone: '402-984-4993',
    email: 'Webster42@hotmail.com'
  },
  {
    id: '0d1e754a-b008-4a27-95d9-e4747686b579',
    name: 'Helen Koch',
    phone: '502-752-6594',
    email: 'Darwin.Bogisich64@gmail.com'
  },
  {
    id: '7f4c4e6d-2c3c-4e90-bde3-f5e29115987b',
    name: 'Terri Robel',
    phone: '553-273-6261',
    email: 'Ike_Kemmer39@hotmail.com'
  },
  {
    id: 'e2540222-a41a-4344-abe4-cb4821d1cbd5',
    name: 'Melody Hartmann',
    phone: '744-665-9536',
    email: 'Elda83@yahoo.com'
  },
  {
    id: 'a1a2763d-4ee0-4842-bb54-6df7c0ff3c96',
    name: 'Claude Tromp',
    phone: '408-993-2545',
    email: 'Vilma36@gmail.com'
  },
  {
    id: '4f5e1b6e-1e37-42d0-bd0b-d13250637675',
    name: 'Rolando Jones',
    phone: '294-900-9822',
    email: 'Stephanie_Oberbrunner80@yahoo.com'
  },
  {
    id: '4c6e30f0-9ceb-42e1-9e20-3451ae949fd2',
    name: 'Mr. Darrin Robel',
    phone: '946-480-0209',
    email: 'Stanton31@gmail.com'
  },
  {
    id: '9808012f-140f-459d-9a3b-7978f24c17b6',
    name: 'Glen Armstrong',
    phone: '719-922-2130',
    email: 'Zella45@hotmail.com'
  },
  {
    id: 'f579e437-9503-4917-8c82-ddcbf23f767b',
    name: 'Sheryl Roob',
    phone: '301-300-4689',
    email: 'Abby44@hotmail.com'
  },
  {
    id: 'b3689732-0930-4828-a2b4-0bd740cd2340',
    name: 'Deanna Stokes',
    phone: '710-921-6465',
    email: 'Brant.Windler@gmail.com'
  },
  {
    id: '7ef858b5-a3c7-47a7-9782-ae4ce715cecf',
    name: 'Marguerite Schuster',
    phone: '837-534-8754',
    email: 'Ross64@gmail.com'
  },
  {
    id: '65890535-e8da-4cdd-a4ff-845501de0c84',
    name: 'Michele Howe',
    phone: '871-212-3382',
    email: 'Yasmeen.Simonis26@gmail.com'
  },
  {
    id: 'a9490837-4c07-48e0-960f-4c88b66f57fb',
    name: 'Lori Schaefer',
    phone: '882-449-5708',
    email: 'Verlie_Bode@hotmail.com'
  },
  {
    id: '11543381-f253-4139-bcec-c69584c59738',
    name: 'Jill Kub I',
    phone: '778-591-7172',
    email: 'Nayeli_Zulauf@yahoo.com'
  },
  {
    id: 'c860eb9f-48af-45d8-b428-27d39a008b22',
    name: 'Sarah Lehner MD',
    phone: '426-527-3132',
    email: 'Melody94@yahoo.com'
  },
  {
    id: '52ce5bc9-f567-43fb-914f-a757deaf7ab8',
    name: 'Brent VonRueden DDS',
    phone: '303-927-9875',
    email: 'Florine.Dibbert85@yahoo.com'
  },
  {
    id: '7dbe30f4-d02c-467a-9d18-043527d9e758',
    name: 'Grace Koelpin',
    phone: '512-898-8974',
    email: 'Cole_Schroeder@gmail.com'
  },
  {
    id: '41e79a23-ff69-4f2f-ba47-f282a2c8770d',
    name: 'Lisa Crist III',
    phone: '908-319-3826',
    email: 'Davin.Paucek19@gmail.com'
  },
  {
    id: '91ca7d83-4d44-4eb0-9bf1-3958656ca80a',
    name: 'Tara Grimes',
    phone: '654-206-7255',
    email: 'Kavon.Carroll@gmail.com'
  },
  {
    id: '83974ba8-121a-444e-9a4e-11dbf2d76da2',
    name: 'Brenda Ankunding',
    phone: '848-330-0900',
    email: 'Gust_Bruen@hotmail.com'
  },
  {
    id: '39a4a2a6-6974-44ce-acf2-9bd212fb7693',
    name: 'Valerie Leannon',
    phone: '318-920-3653',
    email: 'Lewis.Collier@hotmail.com'
  },
  {
    id: '295e7e10-2ffc-443a-9dbb-d3c73613d7ee',
    name: 'Stuart Stehr',
    phone: '271-625-8339',
    email: 'Jovanny_Stamm@yahoo.com'
  },
  {
    id: 'cdab8e51-d1c5-453d-a317-7631aeb3c739',
    name: 'Brent Welch',
    phone: '325-635-4490',
    email: 'Connie.Wilkinson@yahoo.com'
  },
  {
    id: '199a17cd-87a6-48f5-bef2-fd9b6d3f5f77',
    name: 'Norman Hermann',
    phone: '575-243-2078',
    email: 'Brook2@hotmail.com'
  },
  {
    id: 'd5f044a8-182a-4d04-97a2-7350a6455df9',
    name: 'Miss Deanna Cummings',
    phone: '245-967-2087',
    email: 'Peter.DAmore@hotmail.com'
  },
  {
    id: 'f9054a7e-cd0d-43d3-9604-d5a12653ca41',
    name: 'Billie Botsford',
    phone: '489-596-5370',
    email: 'Margret_Champlin59@gmail.com'
  },
  {
    id: 'd420876c-407e-4104-99d0-6b383c967cf7',
    name: 'Cecelia Bernier',
    phone: '254-207-0626',
    email: 'Valentine.Ortiz@gmail.com'
  },
  {
    id: '707d1b7b-a433-4eac-90e4-4dd18624008d',
    name: 'Harvey Strosin',
    phone: '592-302-3820',
    email: 'Laurianne.Braun59@hotmail.com'
  },
  {
    id: '83884cc3-41f0-4034-a8f0-abb6d75c01b2',
    name: 'Myrtle Runolfsdottir',
    phone: '204-930-1708',
    email: 'Elenora.Tremblay@yahoo.com'
  },
  {
    id: '0e998531-7612-45b8-b673-f15d36ea2cf2',
    name: 'Ronald Reichel',
    phone: '261-577-2537',
    email: 'Desiree_Koch@yahoo.com'
  },
  {
    id: '556f03dd-2d42-4138-88cd-e79176f068dd',
    name: 'Lindsay Witting',
    phone: '500-258-5043',
    email: 'Yasmeen39@hotmail.com'
  },
  {
    id: '23d5dd4e-d8db-4fae-9279-4714667da8ce',
    name: 'Andre Labadie',
    phone: '228-509-9455',
    email: 'Lyla34@hotmail.com'
  },
  {
    id: '9c64eb8a-518e-4878-89e4-40113c15f152',
    name: 'Stella Predovic',
    phone: '242-929-6961',
    email: 'Sammie.Becker20@hotmail.com'
  },
  {
    id: 'e2a3b981-95f3-4df9-bcbf-7db487941f49',
    name: 'Jackie Weber',
    phone: '860-805-5186',
    email: 'Edward_Kunze17@yahoo.com'
  },
  {
    id: '56990ba6-abbc-4f32-8641-3121c6a61f4d',
    name: 'Toni Orn',
    phone: '605-885-4983',
    email: 'Roxanne92@gmail.com'
  },
  {
    id: '92bb0b66-935b-4aa3-9f29-bc8c89aeee09',
    name: 'Dean Goyette PhD',
    phone: '674-461-7300',
    email: 'Joesph.Blanda@gmail.com'
  },
  {
    id: '6bd8cde9-0bc1-4691-9742-84e4e905e426',
    name: 'Mr. Reginald Hara',
    phone: '586-907-8108',
    email: 'Toni.Raynor16@gmail.com'
  },
  {
    id: 'd829ee13-df35-46f6-b95a-02e00aa70c45',
    name: 'Winston Hegmann',
    phone: '940-839-4054',
    email: 'Dax.Fadel@gmail.com'
  },
  {
    id: '1cfa9897-010d-4344-a77e-ab647231cd58',
    name: 'Alma Moen',
    phone: '695-234-5805',
    email: 'Rashawn_Kreiger13@hotmail.com'
  },
  {
    id: '77c46ca3-c36b-4133-8495-4f2b842e1fb9',
    name: 'Elsa Abshire',
    phone: '826-697-6972',
    email: 'Abigayle_Romaguera79@yahoo.com'
  },
  {
    id: '0083e680-e893-4fac-a1ea-f07bb5485b77',
    name: 'Ramiro Moen',
    phone: '726-450-1010',
    email: 'Gussie.Howell66@hotmail.com'
  },
  {
    id: '944eb63d-e908-45c4-b9e2-3519265b1e66',
    name: 'Leonard Greenholt',
    phone: '566-627-7336',
    email: 'Jedidiah.Stark1@hotmail.com'
  }
]
  .sort((contactA, contactB) => contactA.name.localeCompare(contactB.name))
  .reduce((list, contact) => {
    const firstChar = contact.name.charAt(0).toUpperCase()

    if (!list[firstChar]) {
      list[firstChar] = {
        data: [],
        header: firstChar
      }
    }

    list[firstChar].data.push(contact)

    return list
  }, {})

const ContactRenderer = ({ email, name, phone }) => {
  const classes = useStyles()

  return (
    <div className={classes.contact}>
      <div className={classes.name}>{name}</div>
      <div className={classes.phone}>{phone}</div>
      <div className={classes.email}>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
    </div>
  )
}

const codeString = `import React from 'react'
import faker from 'faker'
import { makeStyles } from '@material-ui/core'
import { GroupList } from '@react-lists/core'

const useStyles = makeStyles(theme => ({
  contact: {
    marginBottom: theme.spacing(2),
    width: '100%'
  },
  name: {
    fontSize: theme.typography.pxToRem(14),
    fontWeight: 'bold',
    paddingBottom: 5
  },
  phone: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: 'normal',
    paddingBottom: 5
  },
  email: {
    fontSize: theme.typography.pxToRem(12),
    fontWeight: 'normal'
  }
}))

const contacts = Array(100).fill({}).map(() => ({
  id: faker.random.uuid(),
  name: faker.name.findName(),
  phone: faker.phone.phoneNumberFormat(),
  email: faker.internet.email()
}))
.sort((contactA, contactB) => contactA.name.localeCompare(contactB.name))
.reduce((list, contact) => {
  const firstChar = contact.name[0].toUpperCase()

  if (!list.hasOwnProperty(firstChar)) {
    list[firstChar] = {
      data: [],
      header: firstChar
    }
  }

  list[firstChar].data.push(contact)

  return list
}, {})

const ContactRenderer = ({ email, name, phone }) => {
    const classes = useStyles()

    return (
    <div className={classes.contact}>
      <div className={classes.name}>{name}</div>
      <div className={classes.phone}>{phone}</div>
      <div className={classes.email}>
        <a href={\`mailto:\${email}\`}>{email}</a>
      </div>
    </div>
  )
}

export default function ContactGroupedList() {
  return (
    <GroupList
      items={contacts}
      itemRenderer={ContactRenderer}
      listHeight={500}
      showGroupIndex
    />
  )
}`

export default function ContactGroupedList() {
  return (
    <>
      <Box mb={2}>
        <GroupList
          items={contacts}
          itemRenderer={ContactRenderer}
          listHeight={500}
          showGroupIndex
        />
      </Box>
      <SyntaxHighlighter language='tsx' showLineNumbers style={darcula}>
        {codeString}
      </SyntaxHighlighter>
    </>
  )
}

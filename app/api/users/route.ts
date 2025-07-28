// export async function POST(request: Request) {
//   const body = await request.json(); // on recupère les données envoyées

//   const parse = userSchema.safeParse(body);
//   if (!parse.success) {
//     return NextResponse.json({ message: parse.error.message }, { status: 400 });
//   }
//   try {
//     await users.insertOne(body);
//     const existingUser = await users.findOne({ email: body.email });
//     console.log(existingUser);
//     if (existingUser) {
//       return NextResponse.json(
//         { message: "Cet email existe déjà" },
//         { status: 400 }
//       );
//     }
//     return NextResponse.json({ message: "Utilisateur ajouté ! " });
//   } catch (error) {
//     return NextResponse.json({ message: "Erreur serveur " }, { status: 500 });
//   }
// }

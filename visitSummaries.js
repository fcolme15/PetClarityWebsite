export const VISIT_SUMMARIES = {
    English: {
      SprainedAnkle: {
        evaluation: `
          <ul>
            <li>The patient presented with a noticeable limp on the right hind leg after an intense play session.</li>
            <li>Physical exam revealed mild swelling and tenderness around the 
              <dfn class="custom-tooltip">hock joint
                <span class="tooltip-text">Hock Joint: the dog’s equivalent of the human ankle, located on the hind leg.</span>
              </dfn>.
            </li>
            <li>Mobility was intact but reduced due to pain.</li>
            <li>Diagnosis: mild to moderate ligament sprain.</li>
          </ul>
        `,
        medication: `
          <ul>
            <li>A 
              <dfn class="custom-tooltip">non-steroidal anti-inflammatory drug
                <span class="tooltip-text">NSAID: a type of medication used to treat pain and inflammation without using steroids.</span>
              </dfn> 
              was prescribed.
            </li>
            <li>Dosed based on the dog’s weight.</li>
            <li>To be taken once daily for five days.</li>
          </ul>
        `,
        treatment: `
          <ul>
            <li>Enforced rest is advised for 7–10 days (no running, jumping, or rough play).</li>
            <li>After 3 days, brief leash walks may resume.</li>
            <li>
              <dfn class="custom-tooltip">Cold compresses
                <span class="tooltip-text">Cold Compress: a chilled pack used to reduce swelling and discomfort.</span>
              </dfn> 
              may be applied twice daily.
            </li>
            <li>Recheck visit recommended.</li>
          </ul>
        `
      },
  
      SwallowedToy: {
        evaluation: `
          <ul>
            <li>The patient was brought in after possibly ingesting a small rubber object.</li>
            <li>Abdominal palpation showed mild discomfort.</li>
            <li>
              <dfn class="custom-tooltip">Radiographs
                <span class="tooltip-text">Radiographs: X-ray images used to detect foreign objects or abnormalities inside the body.</span>
              </dfn> 
              confirmed a foreign object in the stomach.
            </li>
          </ul>
        `,
        medication: `
          <ul>
            <li>An 
              <dfn class="custom-tooltip">antiemetic
                <span class="tooltip-text">Antiemetic: a medication that helps prevent nausea and vomiting.</span>
              </dfn> 
              was administered.
            </li>
            <li>No laxatives were used due to obstruction risk.</li>
          </ul>
        `,
        treatment: `
          <ul>
            <li>Monitoring advised to track object movement through digestive tract.</li>
            <li>Soft diet for 48 hours.</li>
            <li>If object doesn't pass in 24–36 hours, 
              <dfn class="custom-tooltip">endoscopy
                <span class="tooltip-text">Endoscopy: a medical procedure using a camera to view or remove items from inside the stomach or intestines.</span>
              </dfn> 
              or surgery may be required.
            </li>
            <li>Watch for vomiting or lethargy.</li>
          </ul>
        `
      },
  
      Anxiety: {
        evaluation: `
          <ul>
            <li>The patient exhibits signs of separation-related distress: pacing, whining, and destructive behavior.</li>
            <li>Behavior observed over several weeks and confirmed by owner logs.</li>
            <li>
              <dfn class="custom-tooltip">Canine anxiety
                <span class="tooltip-text">Canine Anxiety: a behavioral condition where a dog experiences excessive fear or stress, often due to separation or environment.</span>
              </dfn> 
              was diagnosed.
            </li>
          </ul>
        `,
        medication: `
          <ul>
            <li>A 
              <dfn class="custom-tooltip">serotonin reuptake inhibitor
                <span class="tooltip-text">SSRI: a medication that helps manage mood by affecting serotonin levels in the brain.</span>
              </dfn> 
              was prescribed for long-term management.
            </li>
            <li>A mild sedative may be used short-term during transitions.</li>
          </ul>
        `,
        treatment: `
          <ul>
            <li>Behavioral training involving 
              <dfn class="custom-tooltip">desensitization
                <span class="tooltip-text">Desensitization: a technique used to reduce fear by gradually exposing the dog to anxiety triggers in a controlled way.</span>
              </dfn>.
            </li>
            <li>Consistent schedules are recommended.</li>
            <li>Owners should avoid long absences when possible.</li>
            <li>Follow-up in 3 weeks to assess progress.</li>
          </ul>
        `
      }
    },
    Spanish: {
        SprainedAnkle: {
          evaluation: `
            <ul>
              <li>El paciente presentó una cojera notable en la pata trasera derecha después de una intensa sesión de juego.</li>
              <li>El examen físico reveló hinchazón y sensibilidad leves alrededor de la 
                <dfn class="custom-tooltip">articulación del corvejón
                  <span class="tooltip-text">Articulación del corvejón: el equivalente en perros al tobillo humano, ubicada en la pata trasera.</span>
                </dfn>.
              </li>
              <li>La movilidad estaba intacta pero reducida debido al dolor.</li>
              <li>Diagnóstico: esguince leve a moderado de ligamentos.</li>
            </ul>
          `,
          medication: `
            <ul>
              <li>Se recetó un 
                <dfn class="custom-tooltip">antiinflamatorio no esteroideo
                  <span class="tooltip-text">AINE: medicamento que trata el dolor y la inflamación sin utilizar esteroides.</span>
                </dfn>.
              </li>
              <li>La dosis se basó en el peso del perro.</li>
              <li>Administrar una vez al día durante cinco días.</li>
            </ul>
          `,
          treatment: `
            <ul>
              <li>Se recomienda reposo absoluto durante 7–10 días (sin correr, saltar ni juegos bruscos).</li>
              <li>Después de 3 días, se pueden reanudar caminatas cortas con correa.</li>
              <li>
                Se pueden aplicar 
                <dfn class="custom-tooltip">compresas frías
                  <span class="tooltip-text">Compresa fría: bolsa fría usada para reducir la hinchazón y el malestar.</span>
                </dfn> 
                dos veces al día.
              </li>
              <li>Se recomienda una visita de control.</li>
            </ul>
          `
        },
    
        SwallowedToy: {
          evaluation: `
            <ul>
              <li>El paciente fue traído tras posiblemente haber ingerido un objeto de goma pequeño.</li>
              <li>La palpación abdominal mostró molestias leves.</li>
              <li>
                Las 
                <dfn class="custom-tooltip">radiografías
                  <span class="tooltip-text">Radiografías: imágenes de rayos X utilizadas para detectar objetos extraños o anomalías internas.</span>
                </dfn> 
                confirmaron un objeto extraño en el estómago.
              </li>
            </ul>
          `,
          medication: `
            <ul>
              <li>Se administró un 
                <dfn class="custom-tooltip">antiemético
                  <span class="tooltip-text">Antiemético: medicamento que ayuda a prevenir las náuseas y el vómito.</span>
                </dfn> 
                para aliviar el malestar.
              </li>
              <li>No se usaron laxantes debido al riesgo de obstrucción.</li>
            </ul>
          `,
          treatment: `
            <ul>
              <li>Se recomienda monitoreo para seguir el movimiento del objeto a través del tracto digestivo.</li>
              <li>Dieta blanda durante 48 horas.</li>
              <li>Si el objeto no pasa en 24–36 horas, puede ser necesaria una 
                <dfn class="custom-tooltip">endoscopía
                  <span class="tooltip-text">Endoscopía: procedimiento médico con cámara para ver o retirar objetos dentro del estómago o intestinos.</span>
                </dfn> 
                o cirugía.
              </li>
              <li>Esté atento a vómitos o letargo.</li>
            </ul>
          `
        },
    
        Anxiety: {
          evaluation: `
            <ul>
              <li>El paciente muestra signos de ansiedad por separación: deambulación, quejidos y comportamiento destructivo.</li>
              <li>Conducta observada durante varias semanas y confirmada con registros del dueño.</li>
              <li>
                Se diagnosticó 
                <dfn class="custom-tooltip">ansiedad canina
                  <span class="tooltip-text">Ansiedad canina: condición en la que el perro sufre miedo o estrés excesivo, generalmente por separación o entorno.</span>
                </dfn>.
              </li>
            </ul>
          `,
          medication: `
            <ul>
              <li>Se recetó un 
                <dfn class="custom-tooltip">inhibidor selectivo de la recaptación de serotonina
                  <span class="tooltip-text">ISRS: medicamento que regula el estado de ánimo afectando los niveles de serotonina en el cerebro.</span>
                </dfn> 
                para manejo a largo plazo.
              </li>
              <li>Un sedante leve puede usarse temporalmente durante transiciones.</li>
            </ul>
          `,
          treatment: `
            <ul>
              <li>Se recomienda entrenamiento conductual con 
                <dfn class="custom-tooltip">desensibilización
                  <span class="tooltip-text">Desensibilización: técnica para reducir el miedo exponiendo gradualmente al perro a los desencadenantes de ansiedad.</span>
                </dfn>.
              </li>
              <li>Mantener horarios consistentes.</li>
              <li>Evitar ausencias prolongadas siempre que sea posible.</li>
              <li>Seguimiento en 3 semanas para evaluar el progreso.</li>
            </ul>
          `
        }
      },
      French: {
        SprainedAnkle: {
          evaluation: `
            <ul>
              <li>Le patient présentait une boiterie notable à la patte arrière droite après une séance de jeu intense.</li>
              <li>L'examen physique a révélé un léger gonflement et une sensibilité autour de 
                <dfn class="custom-tooltip">l'articulation du jarret
                  <span class="tooltip-text">Articulation du jarret : équivalent chez le chien de la cheville humaine, située sur la patte arrière.</span>
                </dfn>.
              </li>
              <li>La mobilité était intacte mais réduite à cause de la douleur.</li>
              <li>Diagnostic : entorse légère à modérée des ligaments.</li>
            </ul>
          `,
          medication: `
            <ul>
              <li>Un 
                <dfn class="custom-tooltip">anti-inflammatoire non stéroïdien
                  <span class="tooltip-text">AINS : médicament utilisé pour traiter la douleur et l'inflammation sans utiliser de stéroïdes.</span>
                </dfn> 
                a été prescrit.
              </li>
              <li>Dosé en fonction du poids du chien.</li>
              <li>Administrer une fois par jour pendant cinq jours.</li>
            </ul>
          `,
          treatment: `
            <ul>
              <li>Repos strict conseillé pendant 7 à 10 jours (pas de course, de saut ou de jeux brusques).</li>
              <li>Après 3 jours, des promenades courtes en laisse peuvent reprendre.</li>
              <li>
                Des 
                <dfn class="custom-tooltip">compresses froides
                  <span class="tooltip-text">Compresse froide : poche réfrigérée utilisée pour réduire le gonflement et l'inconfort.</span>
                </dfn> 
                peuvent être appliquées deux fois par jour.
              </li>
              <li>Une visite de contrôle est recommandée.</li>
            </ul>
          `
        },
    
        SwallowedToy: {
          evaluation: `
            <ul>
              <li>Le patient a été amené après avoir possiblement ingéré un petit objet en caoutchouc.</li>
              <li>La palpation abdominale a révélé un léger inconfort.</li>
              <li>
                Des 
                <dfn class="custom-tooltip">radiographies
                  <span class="tooltip-text">Radiographies : images aux rayons X utilisées pour détecter des objets étrangers ou des anomalies internes.</span>
                </dfn> 
                ont confirmé la présence d’un corps étranger dans l’estomac.
              </li>
            </ul>
          `,
          medication: `
            <ul>
              <li>Un 
                <dfn class="custom-tooltip">antiémétique
                  <span class="tooltip-text">Antiémétique : médicament qui aide à prévenir les nausées et les vomissements.</span>
                </dfn> 
                a été administré pour soulager l’inconfort.
              </li>
              <li>Aucun laxatif n’a été utilisé en raison du risque d’obstruction.</li>
            </ul>
          `,
          treatment: `
            <ul>
              <li>Surveillance recommandée pour suivre le déplacement de l’objet dans le tractus digestif.</li>
              <li>Régime alimentaire mou pendant 48 heures.</li>
              <li>Si l’objet ne passe pas naturellement en 24 à 36 heures, une 
                <dfn class="custom-tooltip">endoscopie
                  <span class="tooltip-text">Endoscopie : procédure médicale utilisant une caméra pour visualiser ou retirer des objets de l’estomac ou des intestins.</span>
                </dfn> 
                ou une chirurgie pourrait être nécessaire.
              </li>
              <li>Surveiller tout vomissement ou léthargie.</li>
            </ul>
          `
        },
    
        Anxiety: {
          evaluation: `
            <ul>
              <li>Le patient présente des signes d'anxiété de séparation : agitation, gémissements, comportements destructeurs en l'absence des propriétaires.</li>
              <li>Comportement observé pendant plusieurs semaines et confirmé par les journaux tenus par le propriétaire.</li>
              <li>
                Un diagnostic 
                <dfn class="custom-tooltip">d'anxiété canine
                  <span class="tooltip-text">Anxiété canine : trouble comportemental où le chien ressent une peur ou un stress excessif, souvent dû à la séparation ou à l’environnement.</span>
                </dfn> 
                a été posé.
              </li>
            </ul>
          `,
          medication: `
            <ul>
              <li>Un 
                <dfn class="custom-tooltip">inhibiteur sélectif de la recapture de la sérotonine
                  <span class="tooltip-text">ISRS : médicament qui aide à réguler l’humeur en agissant sur les niveaux de sérotonine dans le cerveau.</span>
                </dfn> 
                a été prescrit pour une gestion à long terme.
              </li>
              <li>Un sédatif léger peut être utilisé temporairement pendant les périodes de transition.</li>
            </ul>
          `,
          treatment: `
            <ul>
              <li>Un entraînement comportemental avec 
                <dfn class="custom-tooltip">désensibilisation
                  <span class="tooltip-text">Désensibilisation : technique visant à réduire la peur en exposant progressivement le chien aux déclencheurs de son anxiété.</span>
                </dfn> 
                est recommandé.
              </li>
              <li>Maintenir des horaires cohérents.</li>
              <li>Éviter les longues absences si possible.</li>
              <li>Un suivi est prévu dans trois semaines pour évaluer les progrès.</li>
            </ul>
          `
        }
      },
      Portuguese: {
        SprainedAnkle: {
          evaluation: `
            <ul>
              <li>O paciente apresentou uma claudicação notável na pata traseira direita após uma sessão de brincadeiras intensa.</li>
              <li>O exame físico revelou inchaço leve e sensibilidade ao redor da 
                <dfn class="custom-tooltip">articulação do jarrete
                  <span class="tooltip-text">Jarrete: equivalente ao tornozelo humano, localizado na pata traseira do cão.</span>
                </dfn>.
              </li>
              <li>A mobilidade estava preservada, porém reduzida devido à dor.</li>
              <li>Diagnóstico: entorse ligamentar de leve a moderada.</li>
            </ul>
          `,
          medication: `
            <ul>
              <li>Foi prescrito um 
                <dfn class="custom-tooltip">anti-inflamatório não esteroidal
                  <span class="tooltip-text">AINE: medicamento usado para tratar dor e inflamação sem uso de esteroides.</span>
                </dfn>.
              </li>
              <li>A dosagem foi baseada no peso do cão.</li>
              <li>Administrar uma vez ao dia por cinco dias.</li>
            </ul>
          `,
          treatment: `
            <ul>
              <li>Recomenda-se repouso absoluto por 7 a 10 dias (sem correr, pular ou brincadeiras brutas).</li>
              <li>Após 3 dias, podem ser retomados passeios curtos com guia.</li>
              <li>
                Aplicações de 
                <dfn class="custom-tooltip">compressas frias
                  <span class="tooltip-text">Compressa Fria: bolsa gelada usada para reduzir inchaço e desconforto.</span>
                </dfn> 
                podem ser feitas duas vezes ao dia.
              </li>
              <li>É recomendada uma consulta de reavaliação.</li>
            </ul>
          `
        },
    
        SwallowedToy: {
          evaluation: `
            <ul>
              <li>O paciente foi trazido após possível ingestão de um pequeno objeto de borracha.</li>
              <li>A palpação abdominal revelou desconforto leve.</li>
              <li>
                <dfn class="custom-tooltip">Radiografias
                  <span class="tooltip-text">Radiografias: imagens de raio-X utilizadas para detectar objetos estranhos ou anomalias internas.</span>
                </dfn> 
                confirmaram a presença de um corpo estranho no estômago.
              </li>
            </ul>
          `,
          medication: `
            <ul>
              <li>Foi administrado um 
                <dfn class="custom-tooltip">antiemético
                  <span class="tooltip-text">Antiemético: medicamento que ajuda a prevenir náuseas e vômitos.</span>
                </dfn> 
                para aliviar o desconforto.
              </li>
              <li>Não foram utilizados laxantes devido ao risco de obstrução.</li>
            </ul>
          `,
          treatment: `
            <ul>
              <li>Recomenda-se monitoramento para acompanhar o movimento do objeto pelo trato digestivo.</li>
              <li>Dieta leve por 48 horas.</li>
              <li>Caso o objeto não seja eliminado naturalmente em 24 a 36 horas, uma 
                <dfn class="custom-tooltip">endoscopia
                  <span class="tooltip-text">Endoscopia: procedimento médico com câmera para visualizar ou remover objetos do estômago ou intestinos.</span>
                </dfn> 
                ou cirurgia pode ser necessária.
              </li>
              <li>Observar sinais como vômito ou letargia.</li>
            </ul>
          `
        },
    
        Anxiety: {
          evaluation: `
            <ul>
              <li>O paciente apresenta sinais de ansiedade por separação: inquietação, choramingo e comportamento destrutivo quando deixado sozinho.</li>
              <li>O comportamento foi observado por várias semanas e confirmado pelos registros do tutor.</li>
              <li>
                Foi diagnosticada 
                <dfn class="custom-tooltip">ansiedade canina
                  <span class="tooltip-text">Ansiedade Canina: condição comportamental em que o cão sente medo ou estresse excessivo, geralmente por separação ou ambiente.</span>
                </dfn>.
              </li>
            </ul>
          `,
          medication: `
            <ul>
              <li>Foi prescrito um 
                <dfn class="custom-tooltip">inibidor seletivo da recaptação de serotonina
                  <span class="tooltip-text">ISRS: medicamento que ajuda a controlar o humor, atuando nos níveis de serotonina no cérebro.</span>
                </dfn> 
                para tratamento de longo prazo.
              </li>
              <li>Um sedativo leve pode ser utilizado temporariamente durante períodos de transição.</li>
            </ul>
          `,
          treatment: `
            <ul>
              <li>Recomenda-se treinamento comportamental com 
                <dfn class="custom-tooltip">dessensibilização
                  <span class="tooltip-text">Dessensibilização: técnica para reduzir o medo expondo gradualmente o cão a gatilhos de ansiedade.</span>
                </dfn>.
              </li>
              <li>Manter rotinas consistentes.</li>
              <li>Evitar longos períodos de ausência, quando possível.</li>
              <li>Retorno em 3 semanas para avaliar o progresso.</li>
            </ul>
          `
        }
      }
    
    
  };
  
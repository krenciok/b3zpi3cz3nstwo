import binascii
import textwrap
import numpy
import operator
from collections import Counter

def text_to_bits(text, encoding='ascii', errors='surrogatepass'):
    bits = bin(int(binascii.hexlify(text.encode(encoding, errors)), 16))[2:]
    return bits.zfill(8 * ((len(bits) + 7) // 8))
def text_from_bits(bits, encoding='ascii', errors='surrogatepass'):
    n = int(bits, 2)
    return n.to_bytes((n.bit_length() + 7) // 8, 'big').decode(encoding, errors) or '\0'
def szyfrujxor(x,key):
    l = len(key)
    y = ''
    for i in range(0,len(x)):
        k = (int(x[i])+int(key[i%l]))%2
        y= y+str(k)
    return y

def chunkify(lst,n):
     return [lst[i::n] for i in range(n)]


fi = open('b1.txt',"r")
y = []
#print('x = ',textwrap.wrap(x,8))
#print('y = ',textwrap.wrap(y,8))
for i in range(0,20):
    s=fi.readline()
    dl=len(s)
    y1=s[:dl-2].split(' ')
    y.append(y1)

fi.close()

fi = open('b2.txt',"r")
s=fi.readline()
y1=s.split(' ')

z=[]
for i in range(0,len(y1)):
    z1 = [item[i] for item in y]
    z.append(z1)


#print(z)

fas=[]
maksima = []
for t1 in z:
    z1=Counter(t1)
    #print(z1)
    m1=max(z1.items(), key=operator.itemgetter(1))[0]
    z2=list(z1.keys())
    #print(m1)
    #print(m2)
    maksima.append(m1)
    fas.append(z2)

porown=[]

for i in range(0,len(fas)):
    ilosc_m_l=[0,0]
    for it in fas[i]:
        sz=(szyfrujxor(it,maksima[i]))
        if sz>='01000001' and sz<='01011010':
            ilosc_m_l[0]=ilosc_m_l[0]+1
            ilosc_m_l.append(szyfrujxor('00100000',sz))
        else:
            ilosc_m_l[1]=ilosc_m_l[1]+1
    porown.append(ilosc_m_l)

moj_ciag=[]
for i in range(0,len(porown)):
    #print(maksima[i],"  ",porown[i])
    tmp=[]
    if (porown[i])[0]>(porown[i])[1]:
        key=szyfrujxor(maksima[i],'00100000')
        asa=szyfrujxor(y1[i],key)
        tmp.append(text_from_bits(asa))
    elif (porown[i])[0]>0:
        for j in range(2,len(porown[i])):
            key=szyfrujxor(maksima[i],(porown[i])[j])
            asa=szyfrujxor(y1[i],key)
            tmp.append(text_from_bits(asa))
    else:
        tmp=[]
    moj_ciag.append(tmp)
for i in range(0,len(moj_ciag)):
    
    print(moj_ciag[i])

